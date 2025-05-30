export const getFormattedTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // hour 0 should be 12

  // Add leading zero to minutes if needed
  const paddedMinutes = minutes.toString().padStart(2, '0');

  return `${hours}:${paddedMinutes} ${ampm}`;
}