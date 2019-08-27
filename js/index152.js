const user={
    username:null,
    password:null,
    greet:function(){
        return this.username,
        console.log(`Hello, I'm user ${username}`);
        console.log('Please assign a username value');
    }
    function(username){
        this.username=username;
    }
    function(password) {
        this.password = password;
    }
};

user.greet();
user.updaterusername('VBhatt');
user.updatepassword('xyz1212');
user.greet();