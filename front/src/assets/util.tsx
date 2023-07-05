function isMobile() {
  if (window.innerHeight > window.innerWidth) {
    return true;
  }
  return false;
}

export { isMobile };
