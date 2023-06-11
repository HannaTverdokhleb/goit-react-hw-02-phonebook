import {Component} from 'react';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchFilter from 'components/SearchFilter/SearchFilter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmitHandler = (data) => {
    for (let i=0; i<this.state.contacts.length; i++) {
      if (this.state.contacts[i].name === data.name) {
        alert(data.name + " is allready in contacts" );
        return
      }
    }
    this.setState((prevState) => ({ contacts:  prevState.contacts.concat(data) }));
  }

  searchHandler = (query) => {
    let result = (query ? query : "")
    this.setState({ filter: result })
  }

  deleteHandler = (e) => {
    let name = e.target.value;
    let contactsCopy = this.state.contacts;
    contactsCopy = contactsCopy.filter((el) => !el.name.includes(name));
    this.setState({ contacts: contactsCopy });
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-title">Phonebook</h1>
        <AddContactForm onSubmit={this.formSubmitHandler} />
        
        <h2 className="title">Contacts</h2>
        <SearchFilter toFind={this.searchHandler} />

        <ContactList searchValue={this.state.filter} contacts={this.state.contacts} deleteContact={this.deleteHandler} />
      </div>
      
    );
  }
};

export default App;
