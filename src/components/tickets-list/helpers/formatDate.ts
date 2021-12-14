const funcTo00 = (num: number): string => {
  if (String(num).length === 1) {
    return `0${String(num)}`;
  }
  return String(num);
};

export function formatDate(str: string | number): string {
  const date = new Date(str);
  const hours = funcTo00(date.getHours());
  const mins = funcTo00(date.getMinutes());
  return `${hours}:${mins}`;
}

export function formatDuration(durationInMins: number): string {
  const hours = Math.floor(durationInMins / 60);
  const mins = funcTo00(durationInMins % 60);
  return `${hours}h ${mins}m`;
}
