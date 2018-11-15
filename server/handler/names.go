package handler

import (
	"fmt"
	"net/http"
)

func handleNames(w http.ResponseWriter, r *http.Request) {
	names := []string{"int", "float", "long", "long long"}

	for _, name := range names {
		fmt.Fprintln(w, name)
	}
}

func NamesInit() {
	http.HandleFunc("/names", handleNames)

}
