package main

import (
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
