
var doc = new jsPDF();

var x=10;
console.log("yo");
var btn=document.querySelector(".b2n");
btn.addEventListener("click",function () {
    console.log("click");
    var name=document.querySelector("#exampleInputName1");

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(80,10,name.value);
    doc.setFont('default')
    doc.setFontType('default')
    doc.text(70,20,document.querySelector("#exampleInputEmail1").value)
    doc.text(84,30,document.querySelector("#mobile").value)

    //Academic Details
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(15, 42, 150, 10, 3, 3, 'FD')
    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(20,50,"Academic Details")

    doc.setFont('default')
    doc.setFontType('default')

    doc.text(20,60,"1)Studying at " +document.querySelector("#college").value+" ("+document.querySelector("#grad").value+" year)")
    doc.text(20,70,"2)12th class percentage :"+document.querySelector("#twlth").value)
    doc.text(20,80,"3)College Aggregate :"+document.querySelector("#agg").value)

    //Project
    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(15, 84, 150, 10, 3, 3, 'FD')
    doc.text(20,90,"Projects")
    doc.setFont('default')
    doc.setFontType('default')



    if(document.querySelector("#paragraph").value!=""){
        console.log("entry")
        doc.text(20,90+x,"1)"+document.querySelector("#paragraph").value)

        x+=10;

    }
    if(document.querySelector("#paragraph2").value!=""){
        console.log("entry2")
        doc.text(20,90+x,"2)"+document.querySelector("#paragraph2").value)
        x+=10;

    }
    if(document.querySelector("#paragraph3").value!=""){
        doc.text(20,90+x,"3)"+document.querySelector("#paragraph3").value)
        x+=10;

    }
    if(document.querySelector("#paragraph4").value!=""){
        doc.text(20,90+x,"4)"+document.querySelector("#paragraph4").value)
        x+=10;

    }

    //Work Experience
    if(document.querySelector("#wrkexp").value!="") {


        doc.setFont('helvetica')
        doc.setFontType('bold')
        doc.setFillColor(255, 255, 255)
        doc.roundedRect(15, 84 + x, 150, 10, 3, 3, 'FD')
        doc.text(20, 90 + x, "Work Experience");
        x += 10;
        doc.setFont('default')
        doc.setFontType('default')
        doc.text(20,90+x,document.querySelector("#wrkexp").value)
        x+=20;

    }

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(15, 84 + x, 150, 10, 3, 3, 'FD')
    doc.text(20, 90 + x, "Skills");
    x += 10;
    doc.setFont('default')
    doc.setFontType('default')
    doc.text(20,90+x,document.querySelector("#skills").value)
    x+=20;

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(15, 94 + x, 150, 10, 3, 3, 'FD')
    doc.text(20, 100 + x, "Other Interests");
    x += 10;
    doc.setFont('default')
    doc.setFontType('default')
    doc.text(20,100+x,document.querySelector("#int").value)
    x+=20;

    doc.save('a4.pdf')
});


