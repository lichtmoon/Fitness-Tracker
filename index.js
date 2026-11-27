

const getStartedPage = document.querySelector(".get-started-page")
const selectedDate = document.querySelector(".selected-date")

const currentCaloriesCount = document.querySelector(".current-calories-count")
const currentProteinCount = document.querySelector(".current-protein-count")
const currentCarbsCount = document.querySelector(".current-carbs-count");
const currentFatCount = document.querySelector(".current-fat-count")

const circularProgressCalories = document.querySelector(".outer-circular-progress-calories")
const circularProgressProtein = document.querySelector(".outer-circular-progress-protein")




const caloriesTotalGoal = document.querySelector(".calories-total-goal");
const proteinTotalGoal = document.querySelector(".protein-total-goal")
const carbsTotalGoal = document.querySelector(".carbs-total-goal");
const fatTotalGoal = document.querySelector(".fat-total-goal");

const remainingCaloriesCount = document.querySelector(".remaining-calories-count")
const remaingProteinCount = document.querySelector(".remaining-protein-count")


/* modal */
const addMealBtn = document.querySelector(".add-meal-btn")
const mealAddModal = document.querySelector(".meal-add-modal")

const mealCategoryCards = document.querySelectorAll(".meal-category-card")
const mealModalContent = document.querySelector(".meal-modal-content")

const foodSelectionView = document.querySelector(".food-selection-view")

const selectedMealTitle = document.querySelector(".selected-meal-title")
const selectedMealIcon = document.querySelector(".selected-meal-icon")

const foodItemDiv = document.querySelector(".food-items-div")

const mealDetailImg = document.querySelector(".meal-detail-img")
const mealTitle = document.querySelector(".meal-title")
const mealsDetailsSection = document.querySelector(".meals-details-section")


const caloriesCount = document.querySelector(".calories-count")
const proteinCount = document.querySelector(".protein-count-detail")
const carbsCount = document.querySelector(".carbs-count")
const fatCount = document.querySelector(".fat-count")


const quantityCount = document.querySelector(".quantity-count")

const servingSizeSelect = document.querySelector(".serving-size-select")
const minusBtn = document.querySelector(".minus-btn")
const addBtn = document.querySelector(".add-btn")

const addToBreakfast = document.querySelector(".add-to-breakfast")


const mealCards = document.querySelectorAll(".meals-section .meals-container");

const mealFoodList = document.querySelector(".meal-food-list")

const mealDetailsPage = document.querySelector(".meal-details-page")

const backBtn = document.querySelector(".back-btn")

const caloriesTotalDetails = document.querySelector(".calories-total-details")
const proteinTotalDetails = document.querySelector(".protein-total-details")
const carbsTotalDetails = document.querySelector(".carbs-total-details")
const fatTotalDetails = document.querySelector(".fat-total-details")

const mealDetailsTitle = document.querySelector(".meal-details-title");
const mealDetailsImage = document.querySelector(".meal-details-image");


const homeNav = document.querySelector(".home-nav")
const diaryNav = document.querySelector(".diary-nav")
const profileNav = document.querySelector(".profile-nav")
const diaryMealList = document.querySelector(".diary-meal-list");

const diaryPageCategoryContainer = document.querySelectorAll(".diary-page-category-container")
const diaryPage = document.querySelector(".diary-page")
const hideMunaKita = document.querySelector(".hidemunakita")
const profilePage = document.querySelector(".profile-page")


const diaryMealTotal = document.querySelector("diary-meal-total")


const diaryCaloriesCount = document.querySelector(".diary-calories-count")
const diaryCaloriesGoal = document.querySelector(".diary-calories-goal")
const diaryProteinCount = document.querySelector(".diary-protein-count")
const diaryProteinGoal= document.querySelector(".diary-protein-goal")
const innerProgressBarProtein = document.querySelector(".inner-progress-bar-protein")
const outerProgressBarProtein = document.querySelector(".outer-progress-bar-protein")
const innerProgressBarCalories = document.querySelector(".inner-progress-bar-calories")
const outerProgressBarCalories = document.querySelector(".outer-progress-bar-calories")

const progressNav = document.querySelector(".progress-nav")
const progressPage = document.querySelector(".progress-page")

const bottomNav = document.querySelector(".bottom-nav")

const profileUsername = document.querySelector(".profile-username")
const userProfileImg = document.querySelector(".user-profile-image")
const editProfileBtn = document.querySelector(".edit-profile-btn")

const editProfileModal = document.querySelector(".edit-profile-modal")

const nameProfile = document.querySelector(".name-profile");

const imgProfileIcon = document.querySelector(".img-profile-icon")

const backBtnFoodSelectionView = document.querySelector(".back-btn-food-selection-view")

const addMore = document.querySelector(".add-more")

const viewAllBtn = document.querySelector(".view-all-btn")

let diarySelectedDate;


  const today = new Date();
  const todayDate = today.toLocaleDateString("en-CA");
  selectedDate.value = todayDate
  diarySelectedDate = todayDate


let userProfile = {
  name: "Licht",
  age: 24,
  height: 170,
  weight: 60,
  fitnessGoal: "maintain weight",
  caloriesGoal: 2500,
  proteinGoal: 150,
  image: ""
}

 userProfile = getUserProfile() || {};


/* let caloriesGoal = 2500;
let proteinGoal = 150; */
/* let carbsGoal = 325;
let fatGoal = 83; */


const food = [
  {
    id:1,
    name: "Boiled Egg",
    image: "img/boiled_egg.png",
    category: ["breakfast", "lunch", "dinner", "snacks"],
    nutrition: {
      calories: 155,
      protein: 12.6,
      carbs: 1.1,
      fat:10.6
    },

      servingOptions: [
    {
      label: "1 piece",
      grams: 50

    },
    {
      label: "100 grams",
      grams: 100
    }
  ]

  },
  {
  id: 2,
  name: "Scrambled Egg",
  image: "img/scrambled_egg.png",
  category: ["breakfast"],
  nutrition: {
    calories: 149,
    protein: 10,
    carbs: 1.6,
    fat: 11
  },
  servingOptions: [
    { label: "1 serving", grams: 50 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 3,
  name: "Oatmeal",
  image: "img/oatmeal.png",
  category: ["breakfast"],
  nutrition: {
    calories: 71,
    protein: 2.5,
    carbs: 12,
    fat: 1.5
  },
  servingOptions: [
    { label: "1 cup", grams: 234 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 4,
  name: "Regular Yogurt",
  image: "img/yogurt.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 61,
    protein: 3.5,
    carbs: 4.7,
    fat: 3.3
  },
  servingOptions: [
    { label: "1 cup", grams: 245 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 5,
  name: "Banana",
  image: "img/banana.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3
  },
  servingOptions: [
    { label: "1 medium piece", grams: 118 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 6,
  name: "Wheat Bread",
  image: "img/wheat_bread.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 252,
    protein: 12.5,
    carbs: 43.1,
    fat: 3.5
  },
  servingOptions: [
    { label: "1 slice", grams: 28 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 7,
  name: "Peanut Butter",
  image: "img/peanut_butter.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 588,
    protein: 25.1,
    carbs: 20,
    fat: 50
  },
  servingOptions: [
    { label: "1 tablespoon", grams: 16 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 8,
  name: "Tuna Sandwich",
  image: "img/tuna_sandwich.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 190,
    protein: 14,
    carbs: 24,
    fat: 5.5
  },
  servingOptions: [
    { label: "1 sandwich", grams: 180 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 9,
  name: "Chicken Breast with Rice",
  image: "img/chicken_rice.png",
  category: ["breakfast", "lunch", "dinner"],
  nutrition: {
    calories: 160,
    protein: 15,
    carbs: 18,
    fat: 3.5
  },
  servingOptions: [
    { label: "1 serving", grams: 300 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 10,
  name: "Sweet Potato",
  image: "img/sweet_potato.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 76,
    protein: 1.4,
    carbs: 17.7,
    fat: 0.1
  },
  servingOptions: [
    { label: "1 medium piece", grams: 130 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 11,
  name: "Pork Longganisa",
  image: "img/longganisa.png",
  category: ["breakfast"],
  nutrition: {
    calories: 300,
    protein: 15,
    carbs: 5,
    fat: 25
  },
  servingOptions: [
    { label: "1 piece", grams: 50 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 12,
  name: "Grilled Tilapia",
  image: "img/grilled_tilapia.png",
  category: ["breakfast", "lunch", "dinner"],
  nutrition: {
    calories: 128,
    protein: 26.2,
    carbs: 0,
    fat: 2.7
  },
  servingOptions: [
    { label: "1 serving", grams: 100 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 13,
  name: "Corned Beef",
  image: "img/corned_beef.png",
  category: ["breakfast"],
  nutrition: {
    calories: 168,
    protein: 17.9,
    carbs: 0,
    fat: 10.7
  },
  servingOptions: [
    { label: "1 serving", grams: 100 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 14,
  name: "Garlic Fried Rice",
  image: "img/garlic_fried_rice.png",
  category: ["breakfast", "lunch", "dinner"],
  nutrition: {
    calories: 170,
    protein: 3,
    carbs: 28,
    fat: 4.5
  },
  servingOptions: [
    { label: "1 cup", grams: 158 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 15,
  name: "Pandesal",
  image: "img/pandesal.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 290,
    protein: 9,
    carbs: 53,
    fat: 5
  },
  servingOptions: [
    { label: "1 piece", grams: 35 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 16,
  name: "Sardines",
  image: "img/sardines.png",
  category: ["breakfast", "lunch"],
  nutrition: {
    calories: 88,
    protein: 9.7,
    carbs: 2.7,
    fat: 4.3
  },
  servingOptions: [
    { label: "1 serving", grams: 100 },
    { label: "100 grams", grams: 100 }
  ]
},
{
  id: 17,
  name: "Whole Milk",
  image: "img/whole_milk.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3
  },
  servingOptions: [
    { label: "1 cup", grams: 244 },
    { label: "100 ml", grams: 100 }
  ]
},
{
  id: 18,
  name: "Whey Protein",
  image: "img/whey_protein.png",
  category: ["breakfast", "snacks"],
  nutrition: {
    calories: 400,
    protein: 80,
    carbs: 8,
    fat: 6
  },
  servingOptions: [
    { label: "1 scoop", grams: 30 },
    { label: "100 grams", grams: 100 }
  ]
}
 
]









let foodLog = [
{
  name: "Boiled Egg",
  meal: "breakfast",
  calories: 155,
  protein: 12.6,
  carbs: 5.6,
  fat: 2.5,
  servingGrams:50 ,
  quantity: 2,
  date: "2026-11-07"
} 

]

const mealIcons = 
  {
    breakfast: "fa-sun",
    lunch: "fa-bowl-food",
    dinner: "fa-utensils",
    snacks: "fa-cookie-bite"
  }

const mealIconsColor = 
  {
    breakfast: "goldenrod",
    lunch: "#F5EBDD",
    dinner: "blueviolet",
    snacks: "#70452E"
  }  

 
const mealCategories = {
  breakfast: {
    title: "Breakfast",
    image: "img/breakfast.png"
  },
  lunch: {
    title: "Lunch",
    image: "img/breakfast.png"
  },
   dinner: {
    title: "Dinner",
    image: "img/breakfast.png"
  },
   snacks: {
    title: "Snacks",
    image: "img/breakfast.png"
  }
}  

 foodLog = getFoodLog() || []; 


 loadProfileImage();

 function isProfileComplete() {
  return (
    userProfile.name &&
    userProfile.age && 
    userProfile.height &&
    userProfile.weight &&
    userProfile.fitnessGoal &&
    userProfile.caloriesGoal &&
    userProfile.proteinGoal

  )
 }

function loadPage() {
   if(isProfileComplete()) {

     nameProfile.textContent = userProfile.name;

    console.log("Selected date:", selectedDate.value);
console.log("Food log:", foodLog);
console.log("Profile:", userProfile);
    dashBoardDisplay()
    
   hideMunaKita.classList.add("show")
   getStartedPage.classList.add("hide")
   bottomNav.classList.add("show")
   
 } else {
  getStartedPage.classList.remove("hide")
 }
}

loadPage() 




   let currentSelectedItem = null;
   let quantity;
   let mealSelection;




addMealBtn.addEventListener("click", ()=> {
  mealAddModal.classList.toggle("show")
})


selectedDate.addEventListener("change", ()=> {
  dashBoardDisplay();
})



function storeNutritionGoalPage() {

  userProfile.caloriesGoal = Number(calorieGoalInput.value)
  userProfile.proteinGoal = Number(proteinGoalInput.value)
}



function dashBoardDisplay() {

   const date = selectedDate.value;
   
  const selectedDayMeals = foodLog.filter((meal) => meal.date === date)


  renderTotalCalories(selectedDayMeals)
  renderTotalProtein(selectedDayMeals)
  renderCarbs(selectedDayMeals)
  renderFat(selectedDayMeals)

}






function renderTotalCalories(foodLog) {
    
    const totalCalories = foodLog.reduce((sum, meal) => {
      return sum + meal.calories
    }, 0)

  

    currentCaloriesCount.textContent = `${totalCalories.toFixed(1)}`;

    caloriesTotalGoal.textContent = userProfile.caloriesGoal

    const remaining = Math.max(userProfile.caloriesGoal - totalCalories, 0)

    const remainingCalories = remaining

    remainingCaloriesCount.textContent = `${remainingCalories.toFixed(1)}`;

   if(userProfile.caloriesGoal === 0) {
          circularProgressCalories.style.background = `conic-gradient(
   rgba(5, 94, 79, 0.539) 0% 0%
  )`
     return 0;
    }
 
    const caloriesProgress = Math.min(totalCalories / userProfile.caloriesGoal * 100, 100)

    if(totalCalories === 0) {
       circularProgressCalories.style.background = `conic-gradient(
   rgba(5, 94, 79, 0.539) 0% 100%
    
  )`
    } else {
        circularProgressCalories.style.background = `conic-gradient(
rgba(6, 222, 158, 0.766)0% ${caloriesProgress}%,
rgba(5, 94, 79, 0.539) ${caloriesProgress}% 100% 
  )`
    }

  

}



function renderTotalProtein(foodLog) {
    console.log("Protein goal:", userProfile.proteinGoal);
    const totalProtein = foodLog.reduce((sum, meal) => {
      return sum + meal.protein
    }, 0);

    console.log("userProfileee", userProfile);
console.log("userProfileproteingoall",userProfile.proteinGoal);

    currentProteinCount.textContent = `${totalProtein.toFixed(1)}`;
    proteinTotalGoal.textContent = `${userProfile.proteinGoal.toFixed(1)}`

    const remaing = Math.max(userProfile.proteinGoal - totalProtein, 0)

    const remaingProtein = remaing

   

    remaingProteinCount.textContent = `${remaingProtein.toFixed(1)}`


     if(userProfile.proteinGoal === 0) {
       circularProgressProtein.style.background = `conic-gradient(
      rgba(81, 2, 95, 0.266) 0% 0%
      
    )`
    return 0
    }  
 
   
    const proteinProgress = Math.min(totalProtein / userProfile.proteinGoal * 100, 100)
   

    if(totalProtein === 0) {
 circularProgressProtein.style.background = 
  `conic-gradient(rgba(81, 2, 95, 0.266) 0% 100%)`;
    } 
      
      else {
    circularProgressProtein.style.background = `conic-gradient(
       rgba(152, 5, 177, 0.87) 0% ${proteinProgress}% ,
       rgba(81, 2, 95, 0.266)${proteinProgress}% 100%
    )`
    }
 
   
}

function calculateMacroGoals() {
  const calorieGoal = userProfile.caloriesGoal;

  const carbsGoal = (calorieGoal * 0.50) / 4;

  const fatGoal = (calorieGoal * 0.30) / 9;

  userProfile.carbsGoal = carbsGoal.toFixed(1);
  userProfile.fatGoal = fatGoal.toFixed(1)
  console.log(userProfile)
}



function renderCarbs(foodLog) {
  const totalCarbs = foodLog.reduce((sum, meal) => {
    return sum + meal.carbs;
  }, 0)

  currentCarbsCount.textContent = `${totalCarbs.toFixed(1)}`

  carbsTotalGoal.textContent = userProfile.carbsGoal

}



function renderFat(foodLog) {
  const totalFat = foodLog.reduce((sum, meal) => {
    return sum + meal.fat;
  }, 0)

  currentFatCount.textContent = `${totalFat.toFixed(1)}`;

  fatTotalGoal.textContent = userProfile.fatGoal
}




/* meal-modal */

mealCategoryCards.forEach((mealCard) => {
  mealCard.addEventListener("click", ()=>{
     mealSelection = mealCard.dataset.meal
    

    selectedMealTitle.textContent = mealSelection;
    selectedMealIcon.classList.add( mealIcons[mealSelection]);
    selectedMealIcon.style.color = mealIconsColor[mealSelection]

    foodSelectionView.classList.add("show")
    mealAddModal.classList.remove("show")

    
  })
})

addMore.addEventListener("click", ()=> {
  foodSelectionView.classList.add("show")
})

viewAllBtn.addEventListener("click", ()=> {
  diaryPage.classList.add("show")
  hideMunaKita.classList.remove("show")
  
})


function calculateNutrition(food, servingGrams) {
   
    const multiplier = servingGrams / 100;

    const proteinTotal = food.nutrition.protein * multiplier

    const caloriesTotal = food.nutrition.calories * multiplier

    const carbsTotal = food.nutrition.carbs * multiplier

    const fatTotal = food.nutrition.fat * multiplier;

    return {
      protein : proteinTotal,
      calories : caloriesTotal,
      carbs: carbsTotal,
      fat: fatTotal
    }
}


function renderFoodList() {
    foodItemDiv.innerHTML = ""

  food.forEach((item) => {
    const mealsContainer = document.createElement("div");
    mealsContainer.classList.add("meals-container");
    mealsContainer.addEventListener("click", ()=> {
      currentSelectedItem = item
     
      renderFoodDetails(item)
      

    })


    const mealsContentDiv = document.createElement("div")
    mealsContentDiv.classList.add("meals-content-div")

    const imgMeals = document.createElement("div");
    imgMeals.classList.add("img-meals")

    const img = document.createElement("img")
    img.classList.add("img");
    img.src = item.image

   const mealsContent = document.createElement("div")
   mealsContent.classList.add("meals-content")

   const mealTitle = document.createElement("span")
   mealTitle.classList.add("meal-title");
   mealTitle.textContent = item.name

   const mealCounts = document.createElement("span")
   mealCounts.classList.add("meal-counts");

   const kcalCount = document.createElement("span")
   mealCounts.classList.add("kcal-counts");
   kcalCount.textContent = `${item.nutrition.calories} kcal •`
  
    const protCount = document.createElement("span");
    protCount.classList.add("protein-count");
    protCount.textContent = ` ${item.nutrition.protein} g (1 piece / 50g)`

   const viewMealBtn = document.createElement("button");
   viewMealBtn.classList.add("view-meal-btn");

   const icon = document.createElement("i");
   icon.classList.add("fa-solid")
   icon.classList.add("fa-chevron-right")
  




imgMeals.appendChild(img)
mealsContentDiv.appendChild(imgMeals)
mealsContent.appendChild(mealTitle);
mealCounts.appendChild(kcalCount)
mealCounts.appendChild(protCount)
mealsContent.appendChild(mealCounts)
mealsContentDiv.appendChild(mealsContent)
mealsContainer.appendChild(mealsContentDiv);
viewMealBtn.appendChild(icon)
mealsContainer.appendChild(viewMealBtn);
foodItemDiv.appendChild(mealsContainer);


  })


}

renderFoodList() 



function renderFoodDetails(item) {
        currentSelectedItem = item;
     
      mealDetailImg.src = currentSelectedItem.image

      quantityCount.textContent = 1
      updateAddButtonState();

     servingSizeSelect.innerHTML = "";


     currentSelectedItem.servingOptions.forEach((option) => {
       const serveItem = document.createElement("option");
       serveItem.textContent = option.label;
       serveItem.value = option.grams



        servingSizeSelect.appendChild(serveItem)
    })

    servingSizeSelect.selectedIndex = 0;
    updateNutritionPreview();

    const servingGrams = Number(servingSizeSelect.value);

      
      mealsDetailsSection.classList.add("show")
      /* foodSelectionView.classList.remove("show") */

    
}


function updateNutritionPreview() {
    
      const totalGram = Number(quantityCount.textContent) * Number(servingSizeSelect.value)


      const nutrition = calculateNutrition(currentSelectedItem, totalGram);
 
      caloriesCount.textContent = `${nutrition.calories.toFixed(1)}`
      proteinCount.textContent = `${nutrition.protein.toFixed(1)}`
      carbsCount.textContent = `${nutrition.carbs.toFixed(1)}`
      fatCount.textContent = `${nutrition.fat.toFixed(1)} `

     
     
}


servingSizeSelect.addEventListener("change", ()=> {
   updateNutritionPreview()
})




      addBtn.addEventListener("click", ()=> {
           quantity = Number(quantityCount.textContent);
           quantity++;
           updateAddButtonState()
          quantityCount.textContent = quantity
          
          updateNutritionPreview()
       
      })

      minusBtn.addEventListener("click", ()=> {
        quantity = Number(quantityCount.textContent);

         if(quantity > 0) {
          quantity--;
          updateAddButtonState()
          quantityCount.textContent = quantity
        }
        updateNutritionPreview()
      })
    


addToBreakfast.addEventListener("click", ()=> {

  const servingGrams = Number(servingSizeSelect.value);
  const quantity = Number(quantityCount.textContent)

   const totalGram = Number(quantityCount.textContent) * Number(servingSizeSelect.value)

 const nutrition =  calculateNutrition(currentSelectedItem, totalGram)

  renderAddBreakfast(
    currentSelectedItem.name, 
    currentSelectedItem.image,
    mealSelection,
    nutrition.calories,
    nutrition.protein,
    nutrition.carbs,
    nutrition.fat,
    quantity,
    servingGrams,
    selectedDate.value
  )

  

  mealsDetailsSection.classList.remove("show")
  foodSelectionView.classList.remove("show")
})

backBtnFoodSelectionView.addEventListener("click", ()=> {
  foodSelectionView.classList.remove("show")
})

function renderAddBreakfast(name, image, meal, calories, protein, carbs, fat, quantity, servingGrams, date) {

  foodLog.push({
    name: name,
    image:image,
    meal: meal,
    calories: calories,
    protein: protein,
    carbs: carbs,
    fat: fat,
    quantity: quantity,
    servingGrams: servingGrams,
    date: date
  })

  dashBoardDisplay();
updateMealPreviewCard()

saveFoodLog();
}




function renderMealList(mealCategory, date) {

  const mealList = foodLog.filter((meal) => 
    meal.date === date
  )



 const selectedMealList = mealList.filter((item) => item.meal === mealCategory)

 
 

 return selectedMealList;

}




function updateAddButtonState() {
  const quantity = Number(quantityCount.textContent);

  if(quantity === 0) {
    addToBreakfast.disabled = true;
  } 
  else {
    addToBreakfast.disabled = false;
  }
    
  
}

/* card.addEventListener("click", ()=> {}); */





function totalCategory(card, property, date) {

  const cardCategory = card.dataset.meal

  const selectedMealList = renderMealList(cardCategory, date)

  const totalCategories =selectedMealList.reduce((sum, meal) => {
    return sum + meal[property]
  }, 0)
  
  return totalCategories

}





function updateMealPreviewCard() {

mealCards.forEach((card) => {
  
  
    
const kcalTotal = card.querySelector(".kcal-total")
const proteinTotal = card.querySelector(".protein-total")
const carbsTotal = card.querySelector(".carbs-total")
const fatTotal = card.querySelector(".fat-total")


   const totalCalories = totalCategory(card, "calories", selectedDate.value)
   const totalProtein = totalCategory(card, "protein", selectedDate.value)
    const totalCarbs = totalCategory(card, "carbs", selectedDate.value)
   const totalFat = totalCategory(card, "fat", selectedDate.value)

   

   kcalTotal.textContent = `${totalCalories.toFixed(1)} kcal •`

   proteinTotal.textContent = `${totalProtein.toFixed(1)} g •`

   carbsTotal.textContent = `${totalCarbs.toFixed(1)} g •`

   fatTotal.textContent = `${totalFat.toFixed(1)} g`
  

 
})
}

updateMealPreviewCard()




function renderMealDetails(card) {
 mealFoodList.innerHTML = "";

  const cardCategory = card.dataset.meal
  const category = mealCategories[cardCategory]

  const foodList = renderMealList(cardCategory, selectedDate.value)

  if(foodList.length === 0) {

    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message-div")
    

    const message = document.createElement("h3")
    message.classList.add("message")
    message.textContent = "No meals added yet"

    const smallMessage = document.createElement("p")
    smallMessage.classList.add("small-message")
    smallMessage.textContent = "Start adding food to track your nutrition"

    messageDiv.appendChild(message)
    messageDiv.appendChild(smallMessage)
    mealFoodList.appendChild(messageDiv)
  }

  mealDetailsImage.src = category.image;
  mealDetailsTitle.textContent = category.title

  

  foodList.forEach((food) => {

    const mealContainerList = document.createElement("div")
    mealContainerList.classList.add("meal-container-list")

    const mealsContentDiv = document.createElement("div")
    mealsContentDiv.classList.add("meals-content-div");

    const imgMeals = document.createElement("div")
    imgMeals.classList.add("img-meals");
    

    const imgFood = document.createElement("img");
    imgFood.classList.add("img-food")
    imgFood.src = food.image

  
    
    const mealsContent = document.createElement("div")
    mealsContent.classList.add("meals-content")

     const foodName = document.createElement("span")
    foodName.classList.add("food-name")
    foodName.textContent = food.name  

    const mealCounts = document.createElement("div")
    mealCounts.classList.add("meal-counts")

    const kcalCount = document.createElement("span")
    kcalCount.classList.add("kcal-count")
    kcalCount.textContent = `${food.calories.toFixed(1)}kcal •`

    const proteinCount = document.createElement("span")
    proteinCount.classList.add("protein-count")
    proteinCount.textContent = ` ${food.protein.toFixed(1)}g protein •`

    const carbsCount = document.createElement("span")
    carbsCount.classList.add("carbs-count")
    carbsCount.textContent = ` ${food.carbs.toFixed(1)}g carbs•`

    const fatCount = document.createElement("span")
    fatCount.classList.add("fat-count")
    fatCount.textContent = ` ${food.fat.toFixed(1)}g fat`

    const viewAllBtn = document.createElement("button");
    viewAllBtn.classList.add("view-all-btn");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid")
    icon.classList.add("fa-chevron-right")
    


    imgMeals.appendChild(imgFood)
    mealsContentDiv.appendChild(imgMeals);

    mealsContent.appendChild(foodName)
    mealsContentDiv.appendChild(mealsContent)

    
    mealCounts.appendChild(kcalCount)
    mealCounts.appendChild(proteinCount)
    mealCounts.appendChild(carbsCount)
    mealCounts.appendChild(fatCount)
    mealsContent.appendChild(mealCounts)
    
    
    
    mealContainerList.appendChild(mealsContentDiv);
    viewAllBtn.appendChild(icon)
    mealContainerList.appendChild(viewAllBtn)

    mealFoodList.appendChild(mealContainerList)
  })
  
}



function calculateMealNutrition(card, property, date) {

  const mealCategory = card.dataset.meal;

  const selectedMealList = renderMealList(mealCategory, date);

  const mealListTotal = selectedMealList.reduce((sum, total) => {
    return sum + total[property]
  }, 0)

  return mealListTotal;
}



mealCards.forEach((card) => {
  card.addEventListener("click", ()=> {
      mealDetailsPage.classList.add("show")
     renderMealDetails(card)



     const caloriesListTotal = calculateMealNutrition(card, "calories", selectedDate.value)
     const proteinListTotal = calculateMealNutrition(card, "protein", selectedDate.value)
     const carbsListTotal = calculateMealNutrition(card, "carbs", selectedDate.value)
     const fatListTotal = calculateMealNutrition(card, "fat", selectedDate.value)

     caloriesTotalDetails.textContent = `${caloriesListTotal.toFixed(1)} kcal`

     proteinTotalDetails.textContent = `${proteinListTotal.toFixed(1)} g`

     carbsTotalDetails.textContent = `${carbsListTotal.toFixed(1)} g`

     fatTotalDetails.textContent = `${fatListTotal.toFixed(1)} g`


  })
})


backBtn.addEventListener("click", ()=> {
  mealDetailsPage.classList.remove("show")
})

homeNav.addEventListener("click", ()=> {
  hideMunaKita.classList.add("show")
  diaryPage.classList.remove("show")
  foodSelectionView.classList.remove("show")
   mealAddModal.classList.remove("show")
   mealsDetailsSection.classList.remove("show")
   foodSelectionView.classList.remove("show")
   mealDetailsPage.classList.remove("show")
   progressPage.classList.remove("show")
   profilePage.classList.remove("show")
   
   nameProfile.textContent = userProfile.name;

   renderTotalCalories(foodLog);
   renderTotalProtein(foodLog)
   renderFat(foodLog);
   renderCarbs(foodLog)
 
   
})

progressNav.addEventListener("click", ()=>{
  progressPage.classList.add("show")
  diaryPage.classList.remove("show")
  hideMunaKita.classList.remove("show")
  profilePage.classList.remove("show")
})


/* diary page */

function renderDiaryPage() {

  diaryMealList.innerHTML = "";



    diaryPageCategoryContainer.forEach((card) => {
      const diaryMealList = card.querySelector(".diary-meal-list")

      diaryMealList.innerHTML = "";
      const categoryMeal = card.dataset.meal;

  const foodList = renderMealList(categoryMeal, diarySelectedDate)

  
    const caloriesTotal = card.querySelector(".calories-total") 
     const proteinTotal = card.querySelector(".protein-total") 
     const carbsTotal = card.querySelector(".carbs-total")
      const fatTotal = card.querySelector(".fat-total")
      

   const totalCalories = totalCategory(card, "calories", diarySelectedDate)
   const totalProtein = totalCategory(card, "protein", diarySelectedDate)
    const totalCarbs = totalCategory(card, "carbs", diarySelectedDate)
   const totalFat = totalCategory(card, "fat", diarySelectedDate)
       
  
   
   caloriesTotal.textContent = `${totalCalories.toFixed(1)} kcal • `
   proteinTotal.textContent = `${totalProtein.toFixed(1)} g protein • `
   
   carbsTotal.textContent = `${totalCarbs.toFixed(1)} g carbs • `
   fatTotal.textContent = `${totalFat.toFixed(1)} g fat  `
  
   if(foodList.length === 0) {
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message-div")
    

    const message = document.createElement("h3")
    message.classList.add("message")
    message.textContent = "No food added yet"

    const smallMessage = document.createElement("p")
    smallMessage.classList.add("small-message")
    smallMessage.textContent = "Start adding food to track your nutrition"

    

    messageDiv.appendChild(message)
    messageDiv.appendChild(smallMessage)
    diaryMealList.appendChild(messageDiv)
  } else {
    console.log("Food Fcking List", foodList)
  }

  foodList.forEach((food) => {

    

    const mealQuantity = food.quantity * food.servingGrams
    
    const diaryFoodEntry = document.createElement("div")
    diaryFoodEntry.classList.add("diary-food-entry");

    const foodName = document.createElement("h3")
    foodName.classList.add("food-name")
    foodName.textContent = food.name;

    const foodNameCount = document.createElement("div");
    foodNameCount.classList.add("food-name-count")

    const foodLabel = document.createElement("span");
    foodLabel.classList.add("food-label")
    foodLabel.textContent = `${food.quantity} (${mealQuantity}g)  `

    const caloriesCount = document.createElement("span")
    caloriesCount.classList.add("calories-count")
    caloriesCount.textContent = `${food.calories.toFixed(1)} kcal •`;

     const proteinCount = document.createElement("span")
    proteinCount.classList.add("protein-count")
    proteinCount.textContent = `${food.protein.toFixed(1)} g protein •`;

     const carbsCount = document.createElement("span")
    carbsCount.classList.add("carbs-count")
    carbsCount.textContent = `${food.carbs.toFixed(1)} g carbs •`;

     const fatCount = document.createElement("span")
    fatCount.classList.add("fat-count")
    fatCount.textContent = `${food.fat.toFixed(1)} g fat`;



    diaryFoodEntry.appendChild(foodName)
    diaryFoodEntry.appendChild(foodNameCount)
    foodNameCount.appendChild(foodLabel)
    foodNameCount.appendChild(caloriesCount)
    foodNameCount.appendChild(proteinCount)
    foodNameCount.appendChild(carbsCount)
    foodNameCount.appendChild(fatCount)


    diaryMealList.appendChild(diaryFoodEntry)


    
  

  })

  })

   diaryCalculationTotalCalories();
   diaryCalculationTotalProtein();


  
}

renderDiaryPage() 





function openCalendar() {
  const dateBtn = document.querySelector(".date-btn")
  const dateDisplay = document.querySelector(".date-display")
  const datePicker = document.querySelector(".date-picker")


  dateBtn.addEventListener("click", ()=> {
    datePicker.showPicker()
  })

  datePicker.addEventListener("change", ()=> {
   const selectedDate = datePicker.value;
   diarySelectedDate = selectedDate
    renderDiaryPage();

  const date = new Date(selectedDate)
  const stringDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

   dateDisplay.textContent = stringDate
  })
}

 openCalendar()


 function diaryCalculationTotalCalories() {

  const totalCalories = [...diaryPageCategoryContainer].reduce((sum, card) => {

     const calorieCategory = totalCategory(card, "calories", diarySelectedDate)

    return sum + calorieCategory
  }, 0)



  diaryCaloriesCount.textContent = `${totalCalories.toFixed(1)}`
  diaryCaloriesGoal.textContent = userProfile.caloriesGoal
  
  if(userProfile.caloriesGoal === 0) {
    innerProgressBarCalories.style.background = 'rgba(2, 65, 109, 0.447)';
    outerProgressBarCalories.style.width = "0%"
    outerProgressBarCalories.style.background = "rgba(2, 65, 109, 0.447)" 
   return;
  }

  const caloriesProgress = Math.min(totalCalories / userProfile.caloriesGoal * 100, 100)

  if(totalCalories === 0) {
    innerProgressBarCalories.style.background = 'rgba(2, 65, 109, 0.447)';
    outerProgressBarCalories.style.background = 'rgba(2, 65, 109, 0.447)'
    outerProgressBarCalories.style.width = `0%`
  } else {
    outerProgressBarCalories.style.width = `${caloriesProgress}%`
    outerProgressBarCalories.style.background = 'rgb(90, 65, 2)'
  }


  
 }

 diaryCalculationTotalCalories()


  function diaryCalculationTotalProtein() {
    const totalProtein = [...diaryPageCategoryContainer].reduce((sum, card)=> {
      const proteinCategory = totalCategory(card, "protein", diarySelectedDate)
      return sum + proteinCategory
    }, 0)

      diaryProteinCount.textContent = `${totalProtein.toFixed(1)}`
      diaryProteinGoal.textContent = userProfile.proteinGoal

      if(userProfile.proteinGoal === 0) {
        innerProgressBarProtein.style.background = "rgba(2, 65, 109, 0.447)"
        outerProgressBarProtein.style.background ="rgba(2, 65, 109, 0.447)"
        outerProgressBarProtein.style.width = "0%"
        return;
      }

      const proteinProgress = Math.min(totalProtein / userProfile.proteinGoal * 100, 100);

      if(totalProtein === 0) {
        innerProgressBarProtein.style.background = "rgba(2, 65, 109, 0.447)"
        outerProgressBarProtein.style.background ="rgba(2, 65, 109, 0.447)"
        outerProgressBarProtein.style.width = "0%"
      }
      else {
        outerProgressBarProtein.style.width = `${proteinProgress}%`
        outerProgressBarProtein.style.background = "blueviolet"
      }
  }


  diaryCalculationTotalProtein()


  diaryNav.addEventListener("click", ()=> {
    diaryPage.classList.add("show")
    hideMunaKita.classList.remove("show")
    progressPage.classList.remove("show")
  })













  /* PROGRESS PAGE */

  let progressTimePeriod = 'week';
  let progressCurrentDate = new Date();

const selectedBtnPeriod = document.querySelectorAll(".btn-progress-container button");
const selectedDateRange = document.querySelector(".navigation-date-container span")
const navigationBtn = document.querySelectorAll(".navigation-date-container button")

const dailyAverageCalories = document.querySelector(".daily-average-calories")
const dailyAverageProtein = document.querySelector(".daily-average-protein")
const caloriesBarContainer = document.querySelector(".calories-bar-container")
const caloriesBar = document.querySelectorAll(".calories-bar")
const averageDailyTotal = document.querySelector(".average-weekly-total");




  selectedBtnPeriod.forEach((btn) => {
    btn.addEventListener("click", ()=> {
      progressTimePeriod = btn.textContent.toLowerCase();

        selectedBtnPeriod.forEach((button) => {
          button.classList.remove("active")
        })
     
      btn.classList.add("active")

      progressDate() 

      
    })
  })

    let startDate;
    let endDate;

  function progressDate() {

    

      if(progressTimePeriod === "week") {
        const days = progressCurrentDate.getDay() + 6;
      const numberOfDays = days % 7;

      const startOfWeek = new Date(progressCurrentDate)
      startOfWeek.setDate(startOfWeek.getDate() - numberOfDays)
      startDate = startOfWeek
      
    
      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(endOfWeek.getDate() + 6)  
      endDate = endOfWeek   
      
        caloriesTrend();
        proteinTrend();

        proteinGoalConsistency();
        caloriesGoalConsistency();

      } else if (progressTimePeriod === "month") {
        const startedDate = new Date(progressCurrentDate)
        startedDate.setDate(1)
        startDate = startedDate

      const endedDate = new Date(progressCurrentDate)
      endedDate.setMonth(endedDate.getMonth() + 1)
      endedDate.setDate(0);
      endDate = endedDate
     
      }

      else if(progressTimePeriod === "year") {
        const startYear = new Date(progressCurrentDate)
        startYear.setMonth(0);
        startYear.setDate(1)

        startDate = startYear
     

        const endYear = new Date(progressCurrentDate)
        endYear.setMonth(11)
        endYear.setDate(31)
        endDate = endYear

        }

       const formattedStartDate = startDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
       })

       const formattedEndDate = endDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
       })

       selectedDateRange.textContent = `${formattedStartDate} - ${formattedEndDate}`

       nutritionOverview();
       
      }

progressDate()

navigationBtn.forEach((btn) => {
  btn.addEventListener("click", ()=> {
    const btnNavigation = btn.dataset.direction

    if(btnNavigation === "previous") {
        if(progressTimePeriod === "week") {
          progressCurrentDate.setDate(progressCurrentDate.getDate() - 7)
        }else if(progressTimePeriod === "month") {
          const origDate = progressCurrentDate.getDate()
          progressCurrentDate.setDate(1)
          progressCurrentDate.setMonth(progressCurrentDate.getMonth() - 1);

         const someDate = new Date(progressCurrentDate);
         someDate.setMonth(someDate.getMonth() + 1)
         someDate.setDate(0)

         const displayDate = Math.min(origDate, someDate.getDate())
         
         progressCurrentDate.setDate(displayDate)


        } else if(progressTimePeriod === "year") {
          progressCurrentDate.setFullYear(progressCurrentDate.getFullYear() - 1)
        }
        

    } else if (btnNavigation === "next") {
          if(progressTimePeriod === "week") {
            progressCurrentDate.setDate(progressCurrentDate.getDate() + 7)
          } else if(progressTimePeriod === "month") {
            const origDate = progressCurrentDate.getDate();
            progressCurrentDate.setDate(1)
            progressCurrentDate.setMonth(progressCurrentDate.getMonth() + 1)

            const someDate = new Date(progressCurrentDate);
            someDate.setMonth(someDate.getMonth() + 1)
            someDate.setDate(0)

            const displayDate = Math.min(origDate, someDate.getDate())

            progressCurrentDate.setDate(displayDate)
            
          } else if (progressTimePeriod === "year") {
            progressCurrentDate.setFullYear(progressCurrentDate.getFullYear() + 1)

          }
    }

    
  progressDate();
  })

})


function nutritionOverview() {
  const dateStart = startDate.toLocaleDateString("en-CA")
 const dateEnd =  endDate.toLocaleDateString("en-CA")

  const selectFood = foodLog.filter((food) => food.date >= dateStart && food.date <= dateEnd)

  const caloriesTotal = selectFood.reduce((sum, food) => {
      return sum + (food.calories * food.quantity)
  }, 0)



  const proteinTotal = selectFood.reduce((sum, food) => {
    return sum + (food.protein * food.quantity)
  }, 0)

  const difference = endDate.getTime() - startDate.getTime();

  const days = difference / 86400000 + 1


  const averageDailyCalories = caloriesTotal / days
 

    const averageDailyProtein = proteinTotal / days


  dailyAverageCalories.textContent = averageDailyCalories.toFixed(1);

  dailyAverageProtein.textContent = averageDailyProtein.toFixed(1);
  

}
nutritionOverview()




function caloriesTrend() {
let dailyTotals = [];

 
 const currentDate = new Date(startDate);

  for(let i = 0; i < 7; i++) {
    const stringDate = currentDate.toLocaleDateString("en-CA")
    const dateMatch = foodLog.filter((food)=> food.date === stringDate )
    const caloriesTotal = dateMatch.reduce((sum, meal) => {
      return sum + (meal.calories * meal.quantity);
    }, 0)

    dailyTotals.push(caloriesTotal)
    currentDate.setDate(currentDate.getDate() + 1)


  }

  const highestDailyTotals = Math.max(...dailyTotals)
  const weekAverage = dailyTotals.reduce((sum, food) => {
        return sum + food
      }, 0)
  const weeklyAverage = weekAverage / 7

  for(let i = 0; i < 7; i++) {
    
    const caloriesTotal = dailyTotals[i]

   if(highestDailyTotals === 0) {
    
      caloriesBar[i].style.height = "0%"
      caloriesBar[i].style.background = "rgba(129, 117, 237, 0.149)"
    } else {
      const caloriesAverage = caloriesTotal / highestDailyTotals * 100;
      
      caloriesBar[i].style.height = `${caloriesAverage.toFixed(1)}%`
      caloriesBar[i].style.background = "rgba(40, 17, 239, 0.7)";
      
    }
  }

  averageDailyTotal.textContent = `${weeklyAverage.toFixed(1)} kcal • Calories`
   
}
caloriesTrend()


 

 function proteinTrend() {
   let yPosition;
  const xPosition = [10, 55, 100, 145, 190, 235, 280]

  const polyLine = document.querySelector("polyline")
  const svg = document.querySelector("svg")
  const averageWeeklyProteinTotal = document.querySelector(".average-weekly-protein-total")

const oldCircles = svg.querySelectorAll(".protein-point")

  oldCircles.forEach((circle)=> {
    circle.remove();
  })
  let dailyProteinTotals = [];

  const currentDate = new Date(startDate);

  for(let i = 0; i < 7; i++) {
    const stringDate = currentDate.toLocaleDateString("en-CA");

    const dateMatch = foodLog.filter((food) => food.date === stringDate);

    const proteinTotal = dateMatch.reduce((sum, food) => {
      return sum + (food.quantity * food.protein);
    }, 0)

    dailyProteinTotals.push(proteinTotal)

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const highestDailyTotals = Math.max(...dailyProteinTotals);

  const weekAverage = dailyProteinTotals.reduce((sum, food) => {
    return sum + food
  }, 0)

  const weeklyAverage = weekAverage / 7;
    const points = [];
 
  for(let i = 0; i < 7; i++) {
    const proteinTotal = dailyProteinTotals[i];
    

    if(highestDailyTotals === 0) {
      yPosition = 160;
    } else {
       const percentageProtein = proteinTotal / highestDailyTotals

       const pixelsUp =  140 * percentageProtein
      yPosition = 160 - pixelsUp
    }

    const day = xPosition[i]
    const point = `${day},${yPosition}`;
    points.push(point)

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

    circle.setAttribute("cx", day);
    circle.setAttribute("cy", yPosition);
    circle.setAttribute("r", 5);
    circle.setAttribute("fill", "#8175ED")
    circle.setAttribute("class", "protein-point")
    
    svg.appendChild(circle)
  }
  const result = points.join(" ")
   

    polyLine.setAttribute("points", result)

    averageWeeklyProteinTotal.textContent = `${weeklyAverage.toFixed(1)} g • Protein`

 
} 

proteinTrend()



const outerProteinGoalProgressBar = document.querySelector(".outer-protein-goal-progress-bar")

 


function proteinGoalConsistency() {
  const proteinCounter = document.querySelector(".protein-counter")
  const innerProteinGoalProgressBar = document.querySelector(".inner-protein-goal-progress-bar")
  const numberFinishProtein = document.querySelector(".numberFinishProtein");

  let proteinGoalCounter = 0;

   const currentDate  = new Date(startDate);

  for(let i = 0; i < 7; i++) {
 
  const stringDate = currentDate.toLocaleDateString("en-CA")

  const foodLogMatchDate = foodLog.filter((food) => food.date === stringDate);

  const daysTotalProtein = foodLogMatchDate.reduce((sum, food) => {
    return sum + (food.quantity * food.protein)
  }, 0)

  if(daysTotalProtein >= userProfile.proteinGoal) {
    proteinGoalCounter += 1;
  } 

   currentDate.setDate(currentDate.getDate() + 1)
} 



  if(proteinGoalCounter === 0) {
    innerProteinGoalProgressBar.style.width = "0%"
    proteinCounter.textContent = `0 / 7 days`
    numberFinishProtein.textContent = 0 
    
  } else {
   const percentageProt = proteinGoalCounter / 7 * 100;
   
   proteinCounter.textContent =  `${proteinGoalCounter} / 7 days`;
  innerProteinGoalProgressBar.style.width = `${percentageProt.toFixed(1)}%`
    innerProteinGoalProgressBar.style.background = " rgb(10, 238, 10)"
  numberFinishProtein.textContent = proteinGoalCounter
  }
  
  
}

proteinGoalConsistency();



const outerCaloriesGoalProgressBar = document.querySelector(".outer-calories-goal-progress-bar");




function caloriesGoalConsistency() {
  const innerCaloriesGoalProgressBar = document.querySelector(".inner-calories-goal-progress-bar");

  const caloriesCounter = document.querySelector(".calories-counter")

const numberFinishCalories = document.querySelector(".number-finish-calories")

  let calorieGoalCounter = 0;

  const currentDate = new Date(startDate);

  for(let i = 0; i < 7; i++) {
    const stringDate = currentDate.toLocaleDateString("en-CA");

    const matchDate = foodLog.filter((food) => food.date === stringDate);

    const dayCalorieTotal = matchDate.reduce((sum, food) => {
      return sum + (food.quantity * food.calories)
    }, 0);

    if(dayCalorieTotal >= userProfile.caloriesGoal) {
      calorieGoalCounter++;
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  if(calorieGoalCounter === 0) {
    
    caloriesCounter.textContent = `0 / 7 days`
    numberFinishCalories.textContent = 0
    innerCaloriesGoalProgressBar.style.width="0%"
  } else {
    const percentageCalories = calorieGoalCounter / 7 * 100;

    innerCaloriesGoalProgressBar.style.width = `${percentageCalories.toFixed(1)}%`
    innerCaloriesGoalProgressBar.style.background = " rgb(10, 238, 10)";
    caloriesCounter.textContent = `${calorieGoalCounter} / 7 days`
    numberFinishCalories.textContent = calorieGoalCounter

  } 
 

}

caloriesGoalConsistency()



const btnGetStarted = document.querySelector(".btn-get-started");

const personalInformationPage = document.querySelector(".personal-information-page")
const setupContinueBtn = document.querySelector(".setup-continue-btn")
const fitnessGoalPage = document.querySelector(".fitness-goal-page")
const fitnessNextBtn = document.querySelector(".fitness-next-btn")
const nutritionGoalPage = document.querySelector('.nutrition-goals-page')
const nutritionBackBtn = document.querySelector(".nutrition-back-btn")
const fitnessBackBtn = document.querySelector(".fitness-back-btn")
const setupBackBtn = document.querySelector(".setup-back-btn")
const linkToDashboard = document.querySelector(".link-to-dashboard")
const inputName = document.getElementById("input-name")
const inputAge = document.getElementById("input-age")
const inputHeight = document.getElementById("input-height")
const inputWeight = document.getElementById("input-weight")
const setupItem = document.querySelectorAll(".set-up-item input")
const fitnessGoalItem = document.querySelectorAll('input[name="goal"]')

const nutritionGoalItem = document.querySelectorAll(".nutrition-goal-flex input")

const proteinGoalInput = document.getElementById("protein-goal-input")
const calorieGoalInput = document.getElementById("calorie-goal-input")
const btnSetupFinish = document.querySelector(".btn-setup-finish")

const inputAgeProfile = document.querySelector(".input-age-profile")
const inputHeightProfile = document.querySelector(".input-height-profile")
const inputWeightProfile = document.querySelector(".input-weight-profile")
btnGetStarted.addEventListener("click", ()=> {
    getStartedPage.classList.add("hide")
    personalInformationPage.classList.add("show")
})

setupContinueBtn.addEventListener("click", ()=> {
   
    if(!validationInformationPage()) {
      return;
    }

    storeInformationPage(
      inputName.value, 
      inputAge.value, 
      inputHeight.value, 
      inputWeight.value)

      restoreSavedGoal();

    getStartedPage.classList.add("hide")
    personalInformationPage.classList.remove("show")
    fitnessGoalPage.classList.add("show")
    
})



 fitnessNextBtn.addEventListener("click", ()=> {
     getStartedPage.classList.add("hide")
    personalInformationPage.classList.remove("show")
  fitnessGoalPage.classList.remove("show")
  nutritionGoalPage.classList.add("show")


 })

 nutritionBackBtn.addEventListener("click", ()=> {
  nutritionGoalPage.classList.remove("show")
  fitnessGoalPage.classList.add("show")

  restoreSavedGoal();
 })

 fitnessBackBtn.addEventListener("click", ()=> {
  fitnessGoalPage.classList.remove("show")
  personalInformationPage.classList.add("show")
 })

 setupBackBtn.addEventListener("click", ()=> {
  personalInformationPage.classList.remove("show")
  getStartedPage.classList.remove("hide")
 })

 linkToDashboard.addEventListener("click", ()=> {
 
 })



function storeInformationPage(name, age, height, weight) {

  userProfile = {
    name: name,
    age: age,
    height: height,
    weight: weight,
    image: userProfile.image || ""
  }  
   
}




setupItem.forEach((item) => {
  item.addEventListener("input", () =>{
     validationInformationPage()
  })
})


function validationInformationPage() {
   if(!inputName.value || !inputAge.value || !inputHeight.value || !inputWeight.value ) {
    setupContinueBtn.disabled = true;
    return false
  } else {
    setupContinueBtn.disabled = false;
    return true;
  }
}

validationInformationPage() 

  let selectedGoal;

function storeFitnessGoal() {


      if(!userProfile.fitnessGoal) {
   fitnessNextBtn.disabled = true;
   } else {
    fitnessNextBtn.disabled = false;
   }

  fitnessGoalItem.forEach((input) => {
    input.addEventListener("change", ()=> {

    console.log("Radio changed!");
      selectedGoal  = document.querySelector('input[name="goal"]:checked')
      userProfile.fitnessGoal = selectedGoal.value;

     
    fitnessNextBtn.disabled = false;
    })
  
  })
  restoreSavedGoal()


}


 


function restoreSavedGoal() {
  selectedGoal =  document.querySelector(`input[value=${userProfile.fitnessGoal}]`)

  if(selectedGoal) {
  selectedGoal.checked = true;
  }
 
}

storeFitnessGoal()





function validationNutritionGoalPage() {
  if(!calorieGoalInput.value || !proteinGoalInput.value) {
    btnSetupFinish.disabled = true;
    return false;
  } else {
    btnSetupFinish.disabled = false;
    return true;
  }
}

btnSetupFinish.addEventListener("click", ()=> {
   

  if(!validationNutritionGoalPage()) {
    return; 
  }

  nameProfile.textContent = userProfile.name;

  storeNutritionGoalPage()
  console.log(userProfile)

hideMunaKita.classList.add("show")
nutritionGoalPage.classList.remove("show")
bottomNav.classList.add("show")

console.log("clikeddddddddddddddddddddddddd")

   renderTotalCalories(foodLog);
   renderTotalProtein(foodLog);
   calculateMacroGoals();
   renderFat(foodLog);
   renderCarbs(foodLog)

   saveUserProfile();

    dashBoardDisplay()
})

profileNav.addEventListener("click", ()=> {
  profilePage.classList.add("show")
    progressPage.classList.remove("show")
  diaryPage.classList.remove("show")
  hideMunaKita.classList.remove("show")

  personalInformationSection();
   usernameProfileSection();
    fitnessGoalSection();
    caloriesGoalSection();
    proteinGoalSection();
    

})



function usernameProfilePage() {
  profileUsername.textContent = userProfile.name
}
 usernameProfilePage()



 editProfileBtn.addEventListener("click", ()=> {
    editProfileModal.classList.add("show")


    changeUsername.value = userProfile.name
    saveUserProfile();
 })

 const chooseFileBtn = document.querySelector(".choose-btn")
 const changeImage = document.querySelector(".changeImage");
 const changeUsername = document.querySelector(".change-username")
 const cancelBtnProfile = document.querySelector(".cancel-btn-profile")
 const saveBtnProfile = document.querySelector(".save-btn-profile")
 const chooseFileProfile = document.querySelector(".choose-file-profile");
 const agePersonalInfo = document.querySelector(".age-personal-info")
  const heightPersonalInfo = document.querySelector(".height-personal-info")
   const weightPersonalInfo = document.querySelector(".weight-personal-info")
   const fitnessGoalInfo = document.querySelector(".fitness-goal-info")
   const caloriesGoalProfile = document.querySelector(".calories-goal-profile")
   const editBtnCaloriesGoal = document.querySelector(".edit-btn-calories-goal")
   const proteinGoalProfile = document.querySelector(".protein-goal-profile")
   const editBtnProteinGoal = document.querySelector(".edit-btn-protein-goal")
   const editBtnNutritionGoal = document.querySelector(".edit-btn-nutrition-goal")
   const editBtnNutritionGoalsModal = document.querySelector(".edit-nutrition-goals-modal")

 console.log(chooseFileProfile.files[0]);



 chooseFileBtn.addEventListener("click", ()=> {
    chooseFileProfile.click();
 })

   
let imgURL;

 chooseFileProfile.addEventListener("change", ()=>{
  const reader = new FileReader();
   const chosenAvatar = chooseFileProfile.files[0];

   if(!chosenAvatar) {
    return
   }

   reader.onload = () => {
      changeImage.src = reader.result;

      userProfile.image = reader.result;
      saveUserProfile();
   }

   reader.readAsDataURL(chosenAvatar)
  
    })


    saveBtnProfile.addEventListener("click", ()=> {

       userProfile.name = changeUsername.value;
       usernameProfileSection();
       saveUserProfile();
  
      if(chooseFileProfile.files[0]) {
        userProfileImg.src = userProfile.image;
        imgProfileIcon.src = userProfile.image;
      }

      saveUserProfile();
      
      editProfileModal.classList.remove("show")
    })

    cancelBtnProfile.addEventListener("click", ()=> {
      editProfileModal.classList.remove("show")
    })



    function usernameProfileSection() {
       
      const updatedUsername = userProfile.name;

      
      profileUsername.textContent = updatedUsername.trim().split(/\s+/).map((username) => username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()).join(" ");
    }

        function personalInformationSection() {
       agePersonalInfo.textContent = `${userProfile.age} yr old`
        heightPersonalInfo.textContent = `${userProfile.height} cm`
        weightPersonalInfo.textContent = `${userProfile.weight} kg` 

    }


    function fitnessGoalSection() {
        fitnessGoalInfo.textContent = userProfile.fitnessGoal
    }

    function caloriesGoalSection() {
      caloriesGoalProfile.textContent = `${userProfile.caloriesGoal} kcal`
    }

     editBtnNutritionGoal.addEventListener("click", ()=> {
       editBtnNutritionGoalsModal.classList.add("show")
       editNutritionGoals();

       saveUserProfile();
      
    }) 

    

      function proteinGoalSection() {
      proteinGoalProfile.textContent = `${userProfile.proteinGoal} g • Protein`
    }


    const changeCalories = document.querySelector(".change-calories")
    const changeProtein = document.querySelector(".change-protein")
    const changeCaloriesGoalInput = document.querySelector(".changeCaloriesGoalInput")
    const changeProteinGoalInput = document.querySelector(".changeProteinGoalInput")
    const cancelNutritionGoalsBtn = document.querySelector(".cancel-nutrition-goals-btn")
    const saveNutritionGoalsBtn = document.querySelector(".save-nutrition-goals-btn")
    const editNutritionGoalsModal = document.querySelector(".edit-nutrition-goals-modal")

    function editNutritionGoals() {

       changeCaloriesGoalInput.value = userProfile.caloriesGoal;
       changeProteinGoalInput.value = userProfile.proteinGoal

      changeProtein.textContent = changeProteinGoalInput.value;
      changeCalories.textContent = changeCaloriesGoalInput.value;

      saveUserProfile();
    }

    saveNutritionGoalsBtn.addEventListener("click", ()=> {
       
      caloriesGoalProfile.textContent = `${changeCaloriesGoalInput.value} kcal`
      proteinGoalProfile.textContent = `${changeProteinGoalInput.value} g • Protein`

      changeProtein.textContent = changeProteinGoalInput.value;
      changeCalories.textContent = changeCaloriesGoalInput.value;

      userProfile.caloriesGoal = Number(changeCaloriesGoalInput.value);
      userProfile.proteinGoal = Number(changeProteinGoalInput.value);

      calculateMacroGoals();
      renderFat(foodLog);
      renderCarbs(foodLog);


      editBtnNutritionGoalsModal.classList.remove("show")
    })









    changeCaloriesGoalInput.addEventListener("input", ()=> {
      changeCalories.textContent = changeCaloriesGoalInput.value;
    })

    changeProteinGoalInput.addEventListener("input", ()=> {
      changeProtein.textContent = changeProteinGoalInput.value;
    })


   cancelNutritionGoalsBtn.addEventListener("click", ()=> {
    editBtnNutritionGoalsModal.classList.remove("show")
   })



  function saveUserProfile() {
     localStorage.setItem("userProfile", JSON.stringify(userProfile))
  }

  function getUserProfile() {
    if(!localStorage.getItem("userProfile")) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem("userProfile"))
    }
  }


  function saveFoodLog() {
    localStorage.setItem("foodLog", JSON.stringify(foodLog))
  }
 

  function getFoodLog() {
    if(!localStorage.getItem("foodLog")) {
      return null
    } else {
      return JSON.parse(localStorage.getItem("foodLog"))
    }
  }


  linkToDashboard.addEventListener("click", ()=> {
    
    if(
      !isProfileComplete()
    ) {
      return;
    } 

    hideMunaKita.classList.add("show")
    getStartedPage.classList.add("hide")
    bottomNav.classList.add("show")
    


      dashBoardDisplay()
    
    
  })

 
  function loadProfileImage() {
    if(userProfile.image) {
       userProfileImg.src = userProfile.image;
       imgProfileIcon.src = userProfile.image;
    }
   
  }