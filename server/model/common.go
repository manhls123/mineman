package model

type Port struct {
	local  string
	public string
	name   string
}

type Payment struct {
	date    string
	ammount int
	method  string
}

type User struct {
	Name     string
	FB       string
	VName    string
	Ram      string
	Chip     string
	PIP      string
	LIP      string
	ports    []Port
	payments []Payment
}

type Name struct {
	Name string
	ID   int
}
