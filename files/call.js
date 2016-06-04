
$.ajax({
  url: '/sum',
  type: 'post',
  data: {
    a: 1,
    b: 4
  },
  success: function(datum) {
    alert(datum);
  },
  error: function(error) {
    alert(error);
  }
})
