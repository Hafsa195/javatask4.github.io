// Function to calculate grade and percentage
function calculateGrade(score, total) {
    // Calculate percentage
    let percentage = (score / total) * 100;
  
    // Determine grade based on percentage
    let grade;
    if (percentage >= 90) {
      grade = 'A';
    } else if (percentage >= 80) {
      grade = 'B';
    } else if (percentage >= 70) {
      grade = 'C';
    } else if (percentage >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Return grade and percentage
    return `Grade: ${grade}, Percentage: ${percentage.toFixed(2)}%`;
  }
  
  // Example usage
  let score = 85;
  let total = 100;
  console.log(calculateGrade(score, total));