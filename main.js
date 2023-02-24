function kiemTraSoNguyenTo(giaTri) {
    if (giaTri <= 1) return false; 
    for (var i = 2; i <= Math.sqrt(giaTri); i++) {
      if (giaTri % i == 0) {
        return false;
      }
    }
    return true;
}

