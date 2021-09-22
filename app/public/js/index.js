const RandomPerson = {
    data() {
      return {
        "Being": {

        },
        "firstname":"",
        "lastname":"",
        "country":"",
        "age":"",
        "email":"",
        "birthday":"",
        "pic":""
        
      }
    },
    created() {
        this.fetchUserData();
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.birthday).format('D MMM YYYY');
        }
    },
    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(responseJSON => {
                var user = responseJSON.results[0];
                this.firstname = user.name.first;
                this.lastname = user.name.last;
                this.country = user.location.country;
                this.age = user.dob.age;
                this.email = user.email;
                this.birthday = user.dob.date;
                this.pic = user.picture.large;
                console.log(user);
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    }
    

  }
  
  Vue.createApp(RandomPerson).mount('#rpApp');
