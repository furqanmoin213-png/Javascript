const HeadingBox = document.getElementsByClassName("heading");

function Change()
{
    console.log(HeadingBox)
    HeadingBox[0].children[0].innerText = "Heading Changed"
}