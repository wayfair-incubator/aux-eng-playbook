---
title: "Running Engagements"
featured: ./images/featured/running.png
---

This document will detail a meeting and procedural structure we use to run engagements

## Intro Meetings

Teams approach us from all over the company looking for advice on starting new
services. We generally explain to the team what our AuxEng program is and give
them some general direction on how to proceed with their project.

If the team seems interested in AuxEng, and their project seems like a good fit
for us, then we ask them to submit a one page document describing what they
intend to build.

## One-Pager

We ask teams to submit a one page document describing what they intend to build
when they express interest in AuxEng. This allows us to see a condensed version
of their project, and it also gives us an artifact to discuss internally.

We meet internally to rate the one-pager on three metrics; business value,
technical value, and team fit.

### Business Value

We always align our projects around delivering business value, so we are careful
to look for projects that we feel will have a measurable impact on Wayfair's
performance. We often look for projects that can associate a dollar amount with
getting their minimum viable product into production.

A major refactor of a legacy system is an example of a project that we would
consider to have low business value. It might solve a lot of problems for
engineers, but it most likely has little to no immediate value for the business
itself.

### Technical Value

We get excited about project that allow us to learn new things, or do something
that has never been done at Wayfair before.

We also look for projects that will have a major effect on a large team of
engineers. We consider helping a large team move to a more modern paradigm to
have high technical value.

### Team Fit

We normally pair with a team for three months, so we really care about team fit.
Having poor team fit can ruin an otherwise good project, and cause unnecessary
friction between AuxEng and the host team.

We write tests for our code, and we believe that high test coverage allows us to
move faster, onboard engineers quicker, and refactor more easily. We deeply
believe in testing, linting, containerized development, maintaining high test
coverage, and CI/CD. Some teams believe these practices will "slow them down"
and will "block them from deploying". Writing tests is a skill, at first it is
hard and can take work to learn. If a team isn't interested in learning to write
tests then they are not a good fit for AuxEng.

## Goals and Metrics

Once we decide we want to work with a team on a project, we work with them to build out OKR-like "goals and metrics".
We use these metrics to clearly define what measurable things we aim to complete during the project.
Like OKRs, we only expect to hit 70% of these goals.
Generally these goals fit on one page, and range from code quality metrics to minimum viable product features.

We only measure the MVP goals once the application is fully deployed and in production.
We focus on deploying a high quality MVP with a small feature set to production as quickly as possible.
We generally have a goal measuring production adoption. This could be the rate of flow through an order processing system, or measuring user interactions on a web page.
This helps prevent us from working on a project that is deployed to production but is never used.

## Scheduling Meetings

Once we've decided on the project goals and metrics, we start discussing scheduling with the host team.
We try to line up our projects with the start and end of quarters.
We also try to give our engineers 3 weeks off between projects to focus on platform work.
Without some time off between projects it can be easy to burn out.
Given those constraints, we work with the host team to set up a start and an end date for the project.

## Kick Off Meeting

During the first week of the project we set up a kickoff meeting with the
developers, the product managers, and anyone else who is interested.

At the kickoff meeting we communicate expectations about how we will be
developing. We explain which testing frameworks we use, and what coverage
metrics we are going to shoot for.

We also communicate what the MVP we agreed on is, and how we are planning on
approaching it technically. Sometimes the MVP or the technical approach hasn't
been fully communicated to the entire team, so we make sure to reiterate it
here.

Finally we talk through the project timeline, and communicate expectations about
when the project MVP will be delivered.

## Weekly Retros

During the project we hold weekly 30 minute retros where we discuss the project.
We talk about three things; what went well, what went poorly, and what we should
do next time.

In general we welcome feedback, and make it clear that we especially value
negative feedback. If we get through most of the retro without having much in
the "went poorly" column, we explicitly ask for more negative feedback, and
remind people that we value it.

We emphasize getting an MVP in production, and getting real world feedback as
soon as possible. During the weekly retros we talk about how close we are to
launching the MVP, and what is blocking us.

We take notes during this meeting, and after we email the notes to everyone that
came. We try to keep the weekly retros pretty tight, we start them on time and
end early.

We also score the goals and metrics sheet before the retro, and will review the progress with the team during the retro.

## Project Retros

At the end of the project we hold an overall project retro. At the start of the
retro we talk through the timeline for the project, and which major milestones
we've hit together.

Then we talk about three things; what went well, what went poorly, and what we
should do next time for the entire project. We emphasize talking about issues
with the project, and love to hear negative feedback about things we could do
better.

We take notes during the meeting, and afterwards we email the notes out to
everyone involved with the project.

## Project NPS

At the same time as the Project retro we send out an NPS survey to ask the host
team how likely they would be to recommend AuxEng.

We use NPS to give us a quick overview on how the project went; it is an
important metric for us to optimize for.

## Three Month Check-in

We care deeply that our AuxEng projects are set up for long term success.
Although during the project we focus on getting the host teams MVP into prod, we
hope that the projects we work on have a long term impact.

Three months after the project is finished we have an informal check-in with the
host team. We are interested in any feedback they have for us, and want to hear
how the project is shaping up after we left.

We are wary of the host team building too much dependency on AuxEng, which is a
failure in our eyes. During the three month check-in we ask the host team about
how they are fairing, and if they feel comfortable maintaining what we built
together.
