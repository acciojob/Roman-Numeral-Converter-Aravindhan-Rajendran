function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	var roman=0;
if(num===0)
{
	return '';
}
for(var i=0;i>=obj.length;i++)
	{
		while(num>=obj.value)
			{
				roman+=obj.value;
				num=num-object.value;
			}
	}
}
console.log(convertToRoman(36));
module.exports = convertToRoman
