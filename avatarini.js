function Avatarini(args) {
    if (typeof(args) === "undefined") {
        args = {};
    }

    this.name = args.name || "A. N. Onymous";
    this.prepArgs(args);

    ///// species handler here...

    this.body = new AvatariniBody(args.body);

    this.gender    = this.body.gender;
    this.build     = this.body.build;
    this.height    = this.body.height;
    this.weight    = this.body.weight;
    this.bodyShape = this.body.shape;
    this.head      = this.body.head;
    this.skin      = this.body.skin;
    this.arms      = this.body.arms;
    this.legs      = this.body.legs;

    this.hair  = this.head.hair;
    this.eyes  = this.head.eyes;
    this.ears  = this.head.ears;
    this.mouth = this.head.mouth;
    this.nose  = this.head.nose;

    this.skinColor = this.skin.color;
    this.skinTone  = this.skin.tone;

    this.armLength = this.arms.length;
    this.armCount  = this.arms.count;

    this.hairColor  = this.hair.color;
    this.hairLength = this.hair.length;

    this.eyeColor    = this.eyes.color;
    this.eyeShape    = this.eyes.shape;
    this.eyeVergence = this.eyes.vergence;
    this.eyeSize     = this.eyes.size;
    this.eyeCount    = this.eyes.count;

    this.earSize  = this.ears.size;
    this.earCount = this.ears.count;
    this.earShape = this.ears.shape;

    this.mouthShape = this.mouth.shape;
    this.mouthSize  = this.mouth.size;
    this.mouthType  = this.mouth.type;

    this.noseSize = this.nose.size;
}

Avatarini.prototype.dump = function () {
  document.body.appendChild(this.toHTML());
}

Avatarini.prototype.prepArgs = function (args) {
  if (typeof args.body === "undefined") {
    args.body = {};
  }
}

Avatarini.prototype.toHTML = function () {
  var children = [
    this.body,
  ];
  
  return toHTMLWithChildren(this, "h1", children);
}

Avatarini.prototype.toSVG = function () {
    // wouldn't it be nice...
    // steps.
    // 1. Create Group element to contain it all
    // 2. for each part, draw the part in the appropriate area
    // 3. Return the object
    // it's that easy!
}

function AvatariniBody(args) {
    this.gender = new AvatariniGender(args.gender);
    this.build  = new AvatariniBuild(args.build);
    this.height = new AvatariniHeight(args.height);
    this.weight = new AvatariniWeight(args.weight);
    this.shape  = new AvatariniShape(args.shape || "straight");

    this.prepArgs(args);    
    
    this.head   = new AvatariniHead(args.head);
    this.skin   = new AvatariniSkin(args.skin);
    this.arms   = new AvatariniArms(args.arms);
    this.legs   = new AvatariniLegs(args.legs);
}

AvatariniBody.prototype.prepArgs = function (args) {
  if (typeof(args.head) === "undefined") {
      args.head = {};
  }
  
  if (typeof(args.skin) === "undefined") {
      args.skin = {};
  }
  
  if (typeof(args.arms) === "undefined") {
      args.arms = {};
  }

  if (typeof(args.legs) === "undefined") {
      args.legs = {};
  }  
}

AvatariniBody.prototype.toHTML = function () {
  var children = [
    this.gender,
    this.build,
    this.height,
    this.weight,
    this.shape,
    this.head,
    this.skin,
    this.arms,
    this.legs,
  ];

  return toHTMLWithChildren(this, "h2", children);
}

function AvatariniGender(value) {
    this.value = value || "unknown";
}

AvatariniGender.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniBuild(value) {
    this.value = value || "lean";
}

AvatariniBuild.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniHeight(value) {
    this.value = value || "average";
}

AvatariniHeight.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniWeight(value) {
    this.value = value || "average";
}

AvatariniWeight.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniHead(args) {
    this.prepArgs(args);
    
    this.hair  = new AvatariniHair(args.hair);
    this.eyes  = new AvatariniEyes(args.eyes);
    this.ears  = new AvatariniEars(args.ears);
    this.mouth = new AvatariniMouth(args.mouth);
    this.nose  = new AvatariniNose(args.nose);
}

AvatariniHead.prototype.prepArgs = function (args) {
    if (typeof(args.hair) === "undefined") {
        args.hair = {};
    }
    
    if (typeof(args.eyes) === "undefined") {
        args.eyes = {};
    }
    
    if (typeof(args.ears) === "undefined") {
        args.ears = {};
    }
    
    if (typeof(args.mouth) == "undefined") {
        args.mouth = {};
    }
    
    if (typeof(args.nose) == "undefined") {
        args.nose = {};
    }
}

AvatariniHead.prototype.toHTML = function () {
  var children = [
    this.hair,
    this.eyes,
    this.ears,
    this.mouth,
    this.nose,
  ];
  
  return toHTMLWithChildren(this, "h3", children);
}

function AvatariniSkin(args) {
    this.color = new AvatariniColor(args.color);
    this.tone  = new AvatariniTone(args.tone);
}

AvatariniSkin.prototype.toHTML = function () {
  var children = [
    this.color,
    this.tone,
  ];
  
  return toHTMLWithChildren(this, "h3", children);
}

function AvatariniColor(value) {
    this.value = value;
}

AvatariniColor.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniTone(value) {
    this.value = value || "average";
}

AvatariniTone.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniArms(args) {
    this.length = new AvatariniLength(args.length);
    this.count  = new AvatariniCount(args.count  || 2);
    this.arm    = new Array();
    
    this.prepArgs(args);

    for (var i = 0; i < this.count.value; i++) {
        getSide(args, "arm", i, this.count.value);
	
        this.arm[i] = new AvatariniArm(args.arm[i]);
    }
}

AvatariniArms.prototype.prepArgs = function (args) {
  if (typeof(args.arm) === "undefined") {
    args.arm = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.arm[i] = {};
    }
  }
}

AvatariniArms.prototype.toHTML = function () {
  var children = [
    this.length,
    this.count,
  ];
  
  children = children.concat(this.arm);
  
  return toHTMLWithChildren(this, "h3", children);
}

function AvatariniLength(value) {
    this.value = value || "average";
}

AvatariniLength.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniCount(value) {
    this.value = value;
}

AvatariniCount.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniLegs(args) {
    this.length = new AvatariniLength(args.length);
    this.count  = new AvatariniCount(args.count  || 2);
    this.leg    = new Array();
    
    this.prepArgs(args);
   
    for (var i = 0; i < this.count.value; i++) {
        getSide(args, "leg", i, this.count.value);
	
        this.leg[i] = new AvatariniLeg(args.leg[i]);
    }
}

AvatariniLegs.prototype.prepArgs = function (args) {
  if (typeof(args.leg) === "undefined") {
    args.leg = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.leg[i] = {};
    }
  }
}

AvatariniLegs.prototype.toHTML = function () {
  var children = [
    this.length,
    this.count,
  ];
  
  children = children.concat(this.leg);
  
  return toHTMLWithChildren(this, "h3", children);
}

function AvatariniHair(args) {
    this.color  = new AvatariniColor(args.color);
    this.length = new AvatariniLength(args.length);
}

AvatariniHair.prototype.toHTML = function () {
  var children = [
    this.color,
    this.length,
  ];
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniEyes(args) {
    this.color    = new AvatariniColor(args.color);
    this.shape    = new AvatariniShape(args.shape || "average");
    this.vergence = new AvatariniVergence(args.vergence);
    this.size     = new AvatariniSize(args.size);
    this.count    = new AvatariniCount(args.count || 2);
    this.eye      = new Array();
    
    this.prepArgs(args);
    
    for (var i = 0; i < this.count.value; i++) {
        getSide(args, "eye", i, this.count.value);

        this.eye[i] = new AvatariniEye(args.eye[i]);
    }
}

AvatariniEyes.prototype.prepArgs = function (args) {
  if (typeof(args.eye) === "undefined") {
    args.eye = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.eye[i] = {};
    }
  }
}

AvatariniEyes.prototype.toHTML = function () {
  var children = [
    this.color,
    this.shape,
    this.vergence,
    this.size,
    this.count,
  ];
  
  children = children.concat(this.eye);
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniShape(value) {
  this.value = value;
}

AvatariniShape.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniVergence(value) {
  this.value = value || "average";
}

AvatariniVergence.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniSize(value) {
  this.value = value || "average";
}

AvatariniSize.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniEars(args) {
    this.size  = new AvatariniSize(args.size);
    this.count = new AvatariniCount(args.count || 2);
    this.shape = new AvatariniShape(args.shape || "rounded");
    this.ear   = new Array();
    
    this.prepArgs(args);

    for (var i = 0; i < this.count.value; i++) {
        getSide(args, "ear", i, this.count.value);
	
        this.ear[i] = new AvatariniEar(args.ear[i]);
    }
}

AvatariniEars.prototype.prepArgs = function (args) {
  if (typeof(args.ear) === "undefined") {
    args.ear = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.ear[i] = {};
    }
  }
}

AvatariniEars.prototype.toHTML = function () {
  var children = [
    this.size,
    this.count,
    this.shape,
  ];
  
  children = children.concat(this.ear);
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniMouth(args) {
    this.shape = new AvatariniShape(args.shape || "average");
    this.size  = new AvatariniSize(args.size);
    this.type  = new AvatariniType(args.type);
}

AvatariniMouth.prototype.toHTML = function () {
  var children = [
    this.shape,
    this.size,
    this.type,
  ];
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniType(value) {
  this.value = value || "neutral";
}

AvatariniType.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniNose(args) {
    this.size = new AvatariniSize(args.size);
}

AvatariniNose.prototype.toHTML = function () {
  var children = [
    this.size,
  ];
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniArm(args) {
    this.side   = new AvatariniSide(args.side);
    this.length = new AvatariniLength(args.length);
    
    this.prepArgs(args);
    
    this.hand   = new AvatariniHand(args.hand);
}

AvatariniArm.prototype.prepArgs = function (args) {
  if (typeof(args.hand) === "undefined") {
    args.hand = {};
    args.hand.side = this.side.value;
  }
}

AvatariniArm.prototype.toHTML = function () {
  var children = [
    this.side,
    this.length,
    this.hand,
  ];
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniSide(value) {
  this.value = value;
}

AvatariniSide.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniLeg(args) {
    this.side   = new AvatariniSide(args.side);
    this.length = new AvatariniLength(args.length);
    
    this.prepArgs(args);    
    
    this.foot   = new AvatariniFoot(args.foot);
}

AvatariniLeg.prototype.prepArgs = function (args) {
  if (typeof(args.foot) === "undefined") {
    args.foot = {};
    args.foot.side = this.side.value;
  }
}

AvatariniLeg.prototype.toHTML = function () {
  var children = [
    this.side,
    this.length,
    this.foot,
  ];
  
  return toHTMLWithChildren(this, "h4", children);
}

function AvatariniEye(args) {
    this.side     = new AvatariniSide(args.side)
    this.color    = new AvatariniColor(args.color);
    this.shape    = new AvatariniShape(args.shape || "average");
    this.vergence = new AvatariniVergence(args.vergence);
    this.size     = new AvatariniSize(args.size);
    
    this.prepArgs(args);    
    
    this.iris     = new AvatariniIris(args.iris);
    this.pupil    = new AvatariniPupil(args.pupil);
    this.sclera   = new AvatariniSclera(args.sclera);
}

AvatariniEye.prototype.prepArgs = function (args) {
  if (typeof(args.iris) === "undefined") {
    args.iris = {};
  }
  
  if (typeof(args.pupil) === "undefined") {
    args.pupil = {};
  }
  
  if (typeof(args.sclera) === "undefined") {
    args.sclera = {};
  }
}

AvatariniEye.prototype.toHTML = function () {
  var children = [
    this.side,
    this.color,
    this.shape,
    this.vergence,
    this.size,
    this.iris,
    this.pupil,
    this.sclera,
  ];
  
  return toHTMLWithChildren(this, "h5", children);
}

function AvatariniEar(args) {
    this.side  = new AvatariniSide(args.side);
    this.size  = new AvatariniSize(args.size);
    this.shape = new AvatariniShape(args.shape || "rounded");
}

AvatariniEar.prototype.toHTML = function () {
  var children = [
    this.side,
    this.size,
    this.shape,
  ];
  
  return toHTMLWithChildren(this, "h5", children);
}

function AvatariniHand(args) {
    this.side    = new AvatariniSide(args.side);
    this.size    = new AvatariniSize(args.size);

    this.prepArgs(args);
        
    this.fingers = new AvatariniFingers(args.fingers);
}

AvatariniHand.prototype.prepArgs = function (args) {
  if (typeof(args.fingers) === "undefined") {
    args.fingers = {};
  }
}

AvatariniHand.prototype.toHTML = function () {
  var children = [
    this.side,
    this.size,
    this.fingers,
  ];
  
  return toHTMLWithChildren(this, "h5", children);
}

function AvatariniFoot(args) {
    this.side = new AvatariniSide(args.side);
    this.size = new AvatariniSize(args.size);
    
    this.prepArgs(args);    
    
    this.toes = new AvatariniToes(args.toes);
}

AvatariniFoot.prototype.prepArgs = function (args) {
  if (typeof(args.toes) === "undefined") {
    args.toes = {};
  }
}

AvatariniFoot.prototype.toHTML = function () {
  var children = [
    this.side,
    this.size,
    this.toes,
  ];
  
  return toHTMLWithChildren(this, "h5", children);
}

function AvatariniIris(args) {
    this.color = new AvatariniColor(args.color);
    this.size  = new AvatariniSize(args.size);
}

AvatariniIris.prototype.toHTML = function () {
  var children = [
    this.color,
    this.size,
  ];
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniPupil(args) {
    this.color = new AvatariniColor(args.color || "black");
    this.size  = new AvatariniSize(args.size);
    this.shape = new AvatariniShape(args.shape || "circle");
}

AvatariniPupil.prototype.toHTML = function () {
  var children = [
    this.color,
    this.size,
    this.shape,
  ];
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniSclera(args) {
    this.color = new AvatariniColor(args.color || "white");
}

AvatariniSclera.prototype.toHTML = function () {
  var children = [
    this.color,
  ];
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniFingers(args) {
    this.count  = new AvatariniCount(args.count || 5);
    this.length = new AvatariniLength(args.length);
    this.finger = new Array();
    
    this.prepArgs(args);

    for (var i = 0; i < this.count.value; i++) {
        args.finger[i].index = args.finger[i].index || i;
        this.finger[i] = new AvatariniFinger(args.finger[i]);
    }
}

AvatariniFingers.prototype.prepArgs = function (args) {
  if (typeof(args.finger) === "undefined") {
    args.finger = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.finger[i] = {};
    }
  }
}

AvatariniFingers.prototype.toHTML = function () {
  children = [
    this.count,
    this.length,
  ];
  
  children = children.concat(this.finger);
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniToes(args) {
    this.count  = new AvatariniCount(args.count  || 5);
    this.length = new AvatariniLength(args.length || "average");
    this.toe    = new Array();
    
    this.prepArgs(args);

    for (var i = 0; i < this.count.value; i++) {
        args.toe[i].index = args.toe[i].index || i;
        this.toe[i] = new AvatariniToe(args.toe[i]);
    }
}

AvatariniToes.prototype.prepArgs = function (args) {
  if (typeof(args.toe) === "undefined") {
    args.toe = new Array();
    
    for (var i = 0; i < this.count.value; i++) {
      args.toe[i] = {};
    }
  }
}

AvatariniToes.prototype.toHTML = function () {
  var children = [
    this.count,
    this.length,
  ];
  
  children = children.concat(this.toe);
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniFinger(args) {
    this.index  = new AvatariniIndex(args.index);
    this.length = new AvatariniLength(args.length || "average");
}

AvatariniFinger.prototype.toHTML = function () {
  var children = [
    this.index,
    this.length,
  ];
  
  return toHTMLWithChildren(this, "h6", children);
}

function AvatariniIndex(value) {
  this.value = value;
}

AvatariniIndex.prototype.toHTML = function () {
  return toHTML(this);
}

function AvatariniToe(args) {
    this.index  = new AvatariniIndex(args.index);
    this.length = new AvatariniLength(args.length || "average");
}

AvatariniToe.prototype.toHTML = function () {
  var children = [
    this.index,
    this.length,
  ];
  
  return toHTMLWithChildren(this, "h6", children);
}

function toHTML(object) {
  var entry = document.createElement("li");
  var name = object.constructor.name.replace(/Avatarini/, "");
  entry.innerHTML = name + ": " + object.value;
  
  return entry;
}

function toHTMLWithChildren(object, level, children) {
  var container = document.createElement("ul");
  
  var title = document.createElement(level);
  
  var name = object.constructor.name.replace(/Avatarini/, "");
  
  if (! name) {
    name = object.name;
  }
  
  title.innerHTML = name;
  
  container.appendChild(title);
  
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    
//DEBUG(child); 
    
    container.appendChild(child.toHTML());
  }
  
  return container;
}

function getSide(args, element, index, count) {
    if (! args[element][index].side) {
        if ((index + 1) % 2 == 0) {
            args[element][index].side = "right";
        } else {
            if (index + 1 == count) {
	        args[element][index].side = "center";
	    } else {
	      args[element][index].side = "left";
	    }	  
	}
    }
}

function DEBUG(child) {
  var div = document.createElement("div");
  div.innerHTML = child.constructor.name;
  document.body.appendChild(div);
}
