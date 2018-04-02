FROM go-fiddle-base

WORKDIR /go/src/go-fiddle

RUN go get -u github.com/elazarl/goproxy

COPY ./ ./

WORKDIR /go/src/go-fiddle/cmd/proxy
# RUN CGO_ENABLED=0 GOOS=linux go build

ENV PORT=8080
EXPOSE 8080

# ENTRYPOINT [ "./proxy" ]
ENTRYPOINT [ "go", "run", "./proxy.go" ]
