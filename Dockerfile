FROM python:3.7-alpine
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install -I -r requirements.txt
VOLUME ["/docs"]
WORKDIR "/docs"
EXPOSE 8000
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
