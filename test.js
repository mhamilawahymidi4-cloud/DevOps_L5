try{
    require('./app');
    console.log("Done");
    process.exit(0);
} catch (error){
    console.error("Test fail", error.message);
    process.exit(1);
}