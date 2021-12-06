var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://thumbs.dreamstime.com/b/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg",
"https://thumbs.dreamstime.com/z/mother-portrait-beautiful-woman-long-brown-hair-young-standing-maternity-mom-vector-illustration-86364538.jpg",
 "https://png.pngitem.com/pimgs/s/413-4134210_standing-hd-png-download.png" , 
"https://image.shutterstock.com/image-vector/cute-little-kid-boy-stand-260nw-1872612856.jpg"];
var names = ["Fmaily Book","Rupesh Cheela", "Ashvini Cheela", "Rithvika Cheela", "Riyansh Cheela"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
