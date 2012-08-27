var lessWalk = {
  variables: function(){
    return [];
  }
};

for(var key in lessWalk){ 
  exports[key] = lessWalk[key];
};