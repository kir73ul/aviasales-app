const funcTo00 = (num: number) => {
  if (String(num).length === 1) {
    return `0${String(num)}`;
  }
  return String(num);
};

export const formatDate = (str: string | number) => {
  const date = new Date(str);
  const hours = funcTo00(date.getHours());
  const mins = funcTo00(date.getMinutes());
  return `${hours}:${mins}`;
}

export const formatDuration = (durationInMins: number) => {
  const hours = Math.floor(durationInMins / 60);
  const mins = funcTo00(durationInMins % 60);
  return `${hours}h ${mins}m`;
}
