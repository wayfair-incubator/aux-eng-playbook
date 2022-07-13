import React, { useState } from "react"
import { Container, Row, Col, Offcanvas } from "react-bootstrap"
import { graphql } from "gatsby"

import Spacer from "../components/Spacer"
import Layout from "../components/layout"
import DocNav from "../components/DocNav"
import Seo from "../components/seo"
import defaultseo from "../images/seo-default.png"

const sortMenu = pages => {
  const base = '/docs/';
  let pageObjects = pages.map(page => {
    return {
      id: page.node.id,
      title: page.node.frontmatter.title,
      slug: page.node.fields.slug,
      relative: page.node.fields.slug.replace(base, '').replace(/\/$/, ''),
      parent: page.node.parent.relativeDirectory,
      children: []
    }
  });

  let parents = pageObjects.filter(page => { return page.parent.length === 0; });
  let children = pageObjects.filter(page => { return page.parent.length > 0; });

  children.forEach(page => {
    const parentIndex = parents.findIndex(element => element.relative === page.parent);
    if (parentIndex >= 0) {
      parents[parentIndex].children.push(page);
    }
  });

  parents.sort((a, b) => {
    let aRelative = a.relative.toLowerCase();
    let bRelative = b.relative.toLowerCase();

    if (aRelative > bRelative) {
      return 1;
    }

    if (aRelative < bRelative) {
      return -1;
    }

    return 0;
  });

  return parents;
}

const Index = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark
  const [show, setShow] = useState(false)

  const menuTree = sortMenu(pages);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onKeyDown = event => {
    switch (event.keyCode) {
      case 13:
        handleShow()
        break
      default:
        return
    }
  }

  return (
    <Layout>
      <Seo title={`Wayfair Auxiliary Engineering - Home`} image={defaultseo}/>
      <Container>
        <Spacer />
        <Row className="d-lg-none">
          <div
            className="doc-nav-button"
            onKeyDown={onKeyDown}
            tabIndex="0"
            role="button"
            onClick={handleShow}
          >
            📖 Navigation
          </div>
          <Offcanvas show={show} onHide={handleClose} scroll backdrop={false}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>📖 Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <DocNav pages={menuTree} />
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <DocNav pages={menuTree} />
          </Col>
          <Col xs="12" sm="10" lg="7" className="doc-container">
            <h1 className="title">Auxiliary Engineering Home</h1>
            <div className="doc-body">
              REPLACE-ME
            </div>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`

export default Index
