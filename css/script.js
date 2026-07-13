const cropData = {

Rice:{
image:"https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900",
season:"Kharif",
soil:"Clay & Loamy Soil",
water:"High",
harvest:"120 - 150 Days",
yield:"25-35 Quintal/Acre",
seed:"Basmati 1121",
fertilizer:"Urea + DAP + Potash",
tips:"Maintain standing water during vegetative growth. Use certified seeds and apply fertilizers in three split doses."
},

Wheat:{
image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900",
season:"Rabi",
soil:"Well Drained Loamy Soil",
water:"Medium",
harvest:"110 - 130 Days",
yield:"18-22 Quintal/Acre",
seed:"HD-2967",
fertilizer:"DAP + Urea",
tips:"Irrigate at Crown Root Initiation stage and control weeds within 30 days."
},

Maize:{
image:"https://images.unsplash.com/photo-1601593768799-76d7f1d6d5c8?w=900",
season:"Kharif",
soil:"Fertile Loamy Soil",
water:"Medium",
harvest:"90-110 Days",
yield:"20-30 Quintal/Acre",
seed:"Pioneer Hybrid",
fertilizer:"NPK + Urea",
tips:"Maintain proper spacing and irrigate during flowering stage."
},

Cotton:{
image:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=900",
season:"Kharif",
soil:"Black Cotton Soil",
water:"Medium",
harvest:"160-180 Days",
yield:"8-12 Quintal/Acre",
seed:"Bt Cotton",
fertilizer:"DAP + Potash",
tips:"Avoid waterlogging and regularly monitor pest attacks."
},

Sugarcane:{
image:"https://images.unsplash.com/photo-1598514982846-1cf73f2b7a08?w=900",
season:"Spring",
soil:"Deep Loamy Soil",
water:"High",
harvest:"10-12 Months",
yield:"350-450 Quintal/Acre",
seed:"Co-86032",
fertilizer:"Urea + SSP",
tips:"Apply organic manure before planting and irrigate frequently."
},

Soybean:{
image:"https://images.unsplash.com/photo-1592928302636-c83cf1c3d4f0?w=900",
season:"Kharif",
soil:"Black Soil",
water:"Medium",
harvest:"90-110 Days",
yield:"12-18 Quintal/Acre",
seed:"JS-335",
fertilizer:"DAP",
tips:"Treat seeds before sowing and avoid excess irrigation."
},

Groundnut:{
image:"https://images.unsplash.com/photo-1625246333195-78d73c1d4d40?w=900",
season:"Kharif",
soil:"Sandy Loam",
water:"Low",
harvest:"100-120 Days",
yield:"10-15 Quintal/Acre",
seed:"JL-24",
fertilizer:"Gypsum + SSP",
tips:"Ensure proper drainage and apply gypsum at flowering."
},

Tomato:{
image:"https://images.unsplash.com/photo-1546470427-e5ac89cd0b90?w=900",
season:"Winter",
soil:"Loamy Soil",
water:"Medium",
harvest:"70-90 Days",
yield:"250 Quintal/Acre",
seed:"Arka Rakshak",
fertilizer:"NPK",
tips:"Use staking and drip irrigation for better production."
},

Potato:{
image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=900",
season:"Winter",
soil:"Sandy Loam",
water:"Medium",
harvest:"90-120 Days",
yield:"80-120 Quintal/Acre",
seed:"Kufri Jyoti",
fertilizer:"DAP + Potash",
tips:"Earth up after 30 days and irrigate lightly."
},

Onion:{
image:"https://images.unsplash.com/photo-1508747703725-719777637510?w=900",
season:"Rabi",
soil:"Well Drained Soil",
water:"Medium",
harvest:"110-130 Days",
yield:"120 Quintal/Acre",
seed:"N-53",
fertilizer:"NPK + Sulphur",
tips:"Avoid overwatering and harvest when neck falls naturally."
}

};

const cropSelect=document.getElementById("cropSelect");
const seedSelect=document.getElementById("seedSelect");
const fertilizerSelect=document.getElementById("fertilizerSelect");

cropSelect.addEventListener("change",function(){

const crop=this.value;

if(!cropData[crop]) return;

const data=cropData[crop];

seedSelect.innerHTML=`<option>${data.seed}</option>`;
fertilizerSelect.innerHTML=`<option>${data.fertilizer}</option>`;

document.getElementById("cropImage").src=data.image;
document.getElementById("cropName").innerHTML=crop;
document.getElementById("season").innerHTML=data.season;
document.getElementById("soil").innerHTML=data.soil;
document.getElementById("water").innerHTML=data.water;
document.getElementById("harvest").innerHTML=data.harvest;
document.getElementById("yield").innerHTML=data.yield;
document.getElementById("tips").innerHTML=data.tips;

});