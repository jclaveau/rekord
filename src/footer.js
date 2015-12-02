
  /* Top-Level Function */
  global.Neuro = Neuro;

  /* Classes */
  global.Neuro.Model = NeuroModel;
  global.Neuro.Database = NeuroDatabase;
  global.Neuro.Relation = NeuroRelation;
  global.Neuro.Operation = NeuroOperation;

  /* Collections */
  global.Neuro.Map = NeuroMap;
  global.Neuro.Collection = NeuroCollection;
  global.Neuro.ModelCollection = NeuroModelCollection;
  global.Neuro.Query = NeuroQuery;
  global.Neuro.RemoteQuery = NeuroRemoteQuery;
  global.Neuro.Page = NeuroPage;

  /* Utility Functions */
  global.Neuro.isNeuro = isNeuro;
  global.Neuro.isDefined = isDefined;
  global.Neuro.isFunction = isFunction;
  global.Neuro.isString = isString;
  global.Neuro.isNumber = isNumber;
  global.Neuro.isBoolean = isBoolean;
  global.Neuro.isDate = isDate;
  global.Neuro.isRegExp = isRegExp;
  global.Neuro.isArray = isArray;
  global.Neuro.isObject = isObject;
  global.Neuro.isValue = isValue;

  global.Neuro.uuid = uuid;
  global.Neuro.indexOf = indexOf;
  global.Neuro.propsMatch = propsMatch;
  global.Neuro.hasFields = hasFields;

  global.Neuro.eventize = eventize;
  
  global.Neuro.extend = extend;
  global.Neuro.extendArray = extendArray;
  
  global.Neuro.transfer = transfer;
  global.Neuro.swap = swap;
  global.Neuro.grab = grab;
  global.Neuro.pull = pull;
  global.Neuro.copy = copy;
  global.Neuro.copyFunction = copyFunction;
  global.Neuro.diff = diff;
  global.Neuro.sizeof = sizeof;
  global.Neuro.isEmpty = isEmpty;
  global.Neuro.collect = collect;

  global.Neuro.compare = compare;
  global.Neuro.equals = equals;
  global.Neuro.equalsStrict = equalsStrict;
  global.Neuro.equalsCompare = equalsCompare;

  global.Neuro.isSorted = isSorted;
  global.Neuro.saveComparator = saveComparator;
  global.Neuro.createComparator = createComparator;
  global.Neuro.addComparator = addComparator;

  global.Neuro.saveWhere = saveWhere;
  global.Neuro.createWhere = createWhere;

  global.Neuro.savePropertyResolver = savePropertyResolver;
  global.Neuro.createPropertyResolver = createPropertyResolver;

  global.Neuro.saveNumberResolver = saveNumberResolver;
  global.Neuro.createNumberResolver = createNumberResolver;

  global.Neuro.saveHaving = saveHaving;
  global.Neuro.createHaving = createHaving;

})(this);