const fs = require('fs');

// Read event data from a JSON file
const eventData = JSON.parse(fs.readFileSync('orario-lezioni.json', 'utf-8'));

// Create the CSV content
let csvContent = 'Subject,Start Date,Start Time,End Date,End Time,Location,Description\n';

eventData.forEach(event => {
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);

  const startDateString = startDate.toISOString().substring(0, 10);
  const startTimeString = startDate.toISOString().substring(11, 16);
  const endDateString = endDate.toISOString().substring(0, 10);
  const endTimeString = endDate.toISOString().substring(11, 16);

  const location = event.aule[0]?.des_indirizzo.replace(",", "") || "";

  csvContent += `${event.title},${startDateString},${startTimeString},${endDateString},${endTimeString},${location || ''},${event.aule[0]?.des_edificio + ' - ' + event.aule[0]?.des_piano + ' - ' + event.docente}\n`;
});

// Write the CSV content to a file
fs.writeFileSync('events.csv', csvContent, 'utf-8');

console.log('CSV file created successfully.');

