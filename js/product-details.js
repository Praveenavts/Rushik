// Functio to grt url
function getQueryParams(){
   const queryParams=new URLSearchParams(window.location.search);
   return{
      id: queryParams.get('id')
   };
}
// Fetch product details based on the ID from the URL

function loadProductdetails(){
   const params=getQueryParams();
   const productId=params.id;
console.log(productId);

const products={
   '1':{
      name:'Paw Mark ACIGUT-500ml',
      price:'MRP:800',
      image:'image/paw mark ACIGUT-500ml.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   
   '2':{
      name:'Paw Mark AFX-500gm',
      price:'MRP:200',
      image:'image/paw mark AFX-500gm.jpg',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '3':{
      name:'Paw Mark hindi flyer',
      price:'MRP:600',
      image:'image/paw mark hindi flyer.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '4':{
      name:'Paw Mark ACIGUT - 500ml',
      price:'MRP:800',
      image:'image/paw mark AQUA-klear-500gm.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '5':{
      name:'Paw Mark oxy-go-500gm',
      price:'MRP:800',
      image:'image/paw mark oxy-go-500gm.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '6':{
      name:'Paw Mark oxy-up 500gm',
      price:'MRP:800',
      image:'image/paw mark oxy-up 500gm.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '7':{
      name:'Paw Mark progen-500ml',
      price:'MRP:800',
      image:'image/paw mark progen-500ml.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '8':{
      name:'Paw Mark toxibind-500gm',
      price:'MRP:800',
      image:'image/paw mark toxibind-500gm.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },
   '9':{
      name:'Paw Mark VIMIN-500ml',
      price:'MRP:800',
      image:'image/paw mark VIMIN-500ml.png',
      desc:'Increases blood count and helps to prevent anemia. Maintains the ph level of the body. Increases red blood count. Promotes good cardiac function. High in Two page view Annotations Present Document properties FLAX-O Flaxseed Oil BENEFITS: Omega 3 (ALA) protects heart and reduces blood vessel damage & useful in high blood pressure. Serve as powerful 24 Nutr Mark FLAX-O Nutr Mark nutrients and antioxidants. Helps to manage cholesterol.',
   },


};


const product= products[productId];

if(product){
   document.getElementById('product-image').src=product.image;
   document.getElementById('product-name').textContent=product.name;
   document.getElementById('product-price').textContent=product.price;
   document.querySelector('.desc').textContent=product.desc;
} else {
   document.getElementById('product-name').textContent = 'Product Not Found';
   document.getElementById('product-price').textContent = '';
 
}
};

// Load product details when the page loads
window.onload = loadProductdetails;