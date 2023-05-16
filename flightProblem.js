// Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly. 

// You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport. 

// You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1

// Example: 

// Array = [2,1,2,3,1]

// In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. The minimum number of planes required in this case is two 2 → 2→ 1. 

// Example 2:

// Array = [1,6,3,4,5,0,0,0,6]

// In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6

function getNoofPlanes(array) {
    // n is total no of airports
    const n = array.length;
    // intialinzing with 1 plane as used
    let planes = 1;
    // taking the fuelavailble at first plane 
    let fuelAvailable = array[0];
  
    // here we handling if only 1 airport is present then returning 1 plane
    if (n === 1) {
      return planes;
    }
  
    // here we handling if no fuel is present at first airport then returning -1
    if (array[0] === 0) {
      return -1;
    }
  

    //here we iterating the remaining array from 1 to n-1 and updating fuel available value to max of current fuel available and sum of current airport position and after consuiming all fuel and the from first condition if fuel available value is greater then returning fuel count and if the index equal to current index we returning -1 because then plane can takes us until the current position only so returning -1 and if this to cases over comed by loop then we adding plane on every itteration and returning planes. 

    for (let i = 1; i < n; i++) {
      fuelAvailable = Math.max(fuelAvailable, i + array[i]);
      if (fuelAvailable >= n - 1) {
        return planes;
      }
  
      if (i == fuelAvailable) {
        return -1;
      }
  
      planes++;
    }
  
    return planes;
  }