// const RandomPerson = {
//     data() {
//       return {
//         "person": {

//         },
//         "firstname":"",
//         "lastname":"",
//         "country":"",
//         "age":"",
//         "email":"",
//         "birthday":"",
//         "pic":""
        
//       }
//     },
//     created() {
//         this.fetchUserData();
//     },

//     computed: {
//         prettyBirthday() {
//             return dayjs(this.birthday).format('D MMM YYYY');
//         }
//     },
//     methods: {
//         fetchUserData() {
//             fetch('https://randomuser.me/api/')
//             .then(response => response.json())
//             .then(responseJSON => {
//                 var user = responseJSON.results[0];
//                 this.firstname = user.name.first;
//                 this.lastname = user.name.last;
//                 this.country = user.location.country;
//                 this.age = user.dob.age;
//                 this.email = user.email;
//                 this.birthday = user.dob.date;
//                 this.pic = user.picture.large;
//                 console.log(user);
//             })
//             .catch( (error) => {
//                 console.error(error);
//             });
//         }
//     }
    

//   }
  
//   Vue.createApp(RandomPerson).mount('#rpApp');

const SomeApp = {
    data() {
      return {
        books: [],
        bookForm: {},
        selectedBook: null
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        selectBook(o) {
          this.selectedBook = o;
          this.bookForm = Object.assign({}, this.selectedBook);
        },
        postBook(evt) {
          if (this.selectedBook === null) {
              this.postNewBook(evt);
          } else {
              this.postEditBook(evt);
          }
        },
       
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewBook(evt) {
         
                console.log("Posting!");
  
                fetch('api/book/create.php', {
                    method:'POST',
                    body: JSON.stringify(this.bookForm),
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    }
                  })
                  .then( response => response.json() )
                  .then( json => {
                    console.log("Returned from post:", json);
                    // TODO: test a result was returned!
                    this.books = json;
  
                    // reset the form
                    this.bookForm = {};
                  });
  
        },
        postEditBook(evt) {
          this.bookForm.id = this.selectedBook.id;


          console.log("Updating!", this.bookForm);

          fetch('api/book/update.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;

              this.bookForm = {};
            });
        },
        postDeleteBook(book) {
          if (!confirm("Are you sure you want to delete the record for "+book.title+"?")) {
                return;
          }
          console.log("Starting to Delete");
          fetch('api/book/delete.php', {
          method:'POST',
          body: JSON.stringify(book),
          headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
          .then( response => response.json() )
          .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;



              });
          }
        
        
    },
    created() {
        this.fetchBookData();
    }
}
  
  Vue.createApp(SomeApp).mount('#offerApp');

