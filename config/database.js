var mongoose = require('mongoose')

module.exports = {

	connection : ()=>{
		mongoose.set('useNewUrlParser', true);
		mongoose.set('useUnifiedTopology', true);
		mongoose.connect('mongodb://localhost:27017/CurdDB',function(error){
		    if(error) {
		      console.log("DB connection failed");
		      console.log(error);
		    }else{
		      console.log("DB connection successful");
		    }
		    
		}).then(() => console.log('Connected to MongoDB...'))
		.catch(err => console.error('Could not connect to MongoDB...'));;

	}

}