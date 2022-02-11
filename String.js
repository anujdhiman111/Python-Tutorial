/*
Python does not support a character type; these are treated as strings of length one, 
thus also considered a substring.

To access substrings, use the square brackets for slicing along with the index or 
indices to obtain your substring

eg:- var1[0]

'Hello'
[]	Slice - Gives the character from the given index	a[1] will give e

[ : ]	Range Slice - Gives the characters from the given range	a[1:4] will give ell

in	Membership - Returns true if a character exists in the given string	H in a will give 1

not in	Membership - Returns true if a character does not exist in the given string	M not 
in a will give 1


capitalize()
Capitalizes first letter of string

find(str, beg=0 end=len(string))
Determine if str occurs in string or in a substring of string if starting index beg and ending index end are given returns index if found and -1 otherwise.

index(str, beg=0, end=len(string))
Same as find(), but raises an exception if str not found.

isalnum()
Returns true if string has at least 1 character and all characters are alphanumeric and 
false otherwise.

isalpha()
Returns true if string has at least 1 character and all characters are alphabetic and 
false otherwise.

isdigit()
Returns true if string contains only digits and false otherwise.

islower()
Returns true if string has at least 1 cased character and all cased characters are in 
lowercase and false otherwise.

isnumeric()
Returns true if a unicode string contains only numeric characters and false otherwise.

isspace()
Returns true if string contains only whitespace characters and false otherwise.

istitle()
Returns true if string is properly "titlecased" and false otherwise.

isupper()
Returns true if string has at least one cased character and all cased characters are in 
uppercase and false otherwise.

max(str)
Returns the max alphabetical character from the string str.

min(str)
Returns the min alphabetical character from the string str.

replace(old, new [, max])
Replaces all occurrences of old in string with new or at most max occurrences if max given.

rfind(str, beg=0,end=len(string))
Same as find(), but search backwards in string.

rindex( str, beg=0, end=len(string))
Same as index(), but search backwards in string.










*/