package main

import (
	"fmt"
	"mineman/handler"
	"net/http"
)

// Handle get user name list

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)

	handler.NamesInit()

	fmt.Println("PORT : 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
