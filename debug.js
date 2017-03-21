const colors = require('colors');

exports.debug = (data, type) => {
  // Timestamp
  const time = new Date() + '\n';


  colors.setTheme({
  success: 'green',
  warn: 'yellow',
  error: 'red'
});

  if (process.env.DEBUG === 'true') {
   // Apply colors to match type 
   if (type == 'warn') {
        // Warnings
          console.warn(colors.warn(data));
      } else if (type == 'error') {
        // Errors
          console.error(colors.error(data));
      } else {
        // All other logs will be in green
          console.log(colors.success(data));
      }
  }    
};

