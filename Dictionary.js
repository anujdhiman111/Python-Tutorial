/* 
Each key is separated from its value by a colon (:), the items are separated by commas, and the whole thing is enclosed 
in curly braces. An empty dictionary without any items is written with just two curly braces, like this: {}.

Keys are unique within a dictionary while values may not be. The values of a dictionary can be of any type, 
but the keys must be of an immutable data type such as strings, numbers, or tuples.

You can either remove individual dictionary elements or clear the entire contents of a dictionary. 
You can also delete entire dictionary in a single operation.

To explicitly remove an entire dictionary, just use the del statement.

del dict['Name']; # remove entry with key 'Name'
dict.clear();     # remove all entries in dict
del dict ;        # delete entire dictionary

More than one entry per key not allowed. Which means no duplicate key is allowed. 
When duplicate keys encountered during assignment, the last assignment wins.

dict.clear()
Removes all elements of dictionary dict

dict.copy()
Returns a shallow copy of dictionary dict

dict.fromkeys()
Create a new dictionary with keys from seq and values set to value.

dict.get(key, default=None)
For key key, returns value or default if key not in dictionary

dict.has_key(key)
Returns true if key in dictionary dict, false otherwise

dict.items()
Returns a list of dict's (key, value) tuple pairs

dict.keys()
Returns list of dictionary dict's keys

dict.setdefault(key, default=None)
Similar to get(), but will set dict[key]=default if key is not already in dict

dict.update(dict2)
Adds dictionary dict2's key-values pairs to dict

dict.values()
Returns list of dictionary dict's values

*/