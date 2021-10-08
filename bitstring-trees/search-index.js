var searchIndex = JSON.parse('{\
"bitstring":{"doc":"This crate provides traits to treat various objects as bit …","t":[3,8,8,10,11,0,11,11,11,10,11,11,11,11,10,11,11,11,0,10,11,11,11,10,10,11,11,10,11,10,10,10,10,11,11,11,10,10,10,11,11,10,10,11,10,10,11,11,11,11,11,0,8,10,10,10,10,10,11,11,11,10,10,11,11,11,11,11,11,11,11,11,8,3,11,11,11,11,10,11,11,11,11,11,10,10,11,11,10,10,11,11,11,10,10,10,11,11,11,11,11,11,11,10,10,10,11,11,11,11,11,11,11,8,10,11,11,10,10,10,10,10,10,10,10,11,11,10,10,10],"n":["BitLengthString","BitString","FixedBitString","append","append","bit_string","bits","borrow","borrow_mut","clip","clip","clone","clone_into","cmp","contains","contains","default","eq","fixed_bit_string","flip","flip","fmt","from","get","get","get","hash","inc","into","is_false_from","is_true_from","len","len","len","len","new","new_all_false","new_all_true","null","null","partial_cmp","set","set","set","set_false_from","set_true_from","shared_prefix_len","to_owned","try_from","try_into","type_id","utils","BitString","append","clip","flip","get","len","lexicographic_cmp","lexicographic_cmp","lexicographic_cmp","null","set","shared_prefix","shared_prefix","shared_prefix","shared_prefix_len","shared_prefix_len","shared_prefix_len","subset_cmp","subset_cmp","subset_cmp","FixedBitString","Iter","borrow","borrow_mut","clone","clone_into","contains","flip","flip","flip","fmt","from","get","inc","into","into_iter","is_false_from","is_true_from","iter","iter","iter","len","new_all_false","new_all_true","next","off","off","off","on","on","on","set","set_false_from","set_true_from","shared_prefix_len","shared_prefix_len","shared_prefix_len","to_owned","try_from","try_into","type_id","BigEndianBitString","contains","elembits","elembits","flip","get","inc","is_false_from","is_true_from","mask","off","on","set","set","set_false_from","set_true_from","shared_prefix_len"],"q":["bitstring","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bitstring::bit_string","","","","","","","","","","","","","","","","","","","","bitstring::fixed_bit_string","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bitstring::utils","","","","","","","","","","","","","","","",""],"d":["Extend a <code>FixedBitString</code> to a <code>BitString</code> by also storing a …","A bit string with variable (but possibly limited) length.","A bit string with fixed length.","Append a bit.","","contains everything related to the <code>BitString</code> trait.","get read access to the bits","","","Set current length to <code>len</code>.","","","","","check whether another bit string <code>other</code> shares the first …","check whether another bit string <code>bits</code> is prefixed by <code>self</code>","","","contains everything related to the <code>FixedBitString</code> trait.","Flips the <code>ndx</code>th bit.","","","","Get the <code>ndx</code>th bit.","Get the <code>ndx</code>th bit.","","","Treat bit string as integer, where bit 0 is the most …","","Whether all bits in [ndx..] are <code>false</code>.","Whether all bits in [ndx..] are <code>true</code>.","Current length of the bit string in bits.","Length of the bit string in bits.","","length of bit string (same as <code>BitString::len()</code>)","Create new dynamic-length bit string from fixed bit string …","New bit string with all bits set to <code>false</code>.","New bit string with all bits set to <code>true</code>.","Create a new zero-length bit string.","","","Set the <code>ndx</code>th bit to <code>bit</code>.","Set the <code>ndx</code>th bit to <code>bit</code>.","","Set all bits in [ndx..] to <code>false</code>.","Set all bits in [ndx..] to <code>true</code>.","","","","","","utils to support implementing bit string traits","A bit string with variable (but possibly limited) length.","Append a bit.","Set current length to <code>len</code>.","Flips the <code>ndx</code>th bit.","Get the <code>ndx</code>th bit.","Current length of the bit string in bits.","Lexicographic ordering on bit strings.","Lexicographic ordering on bit strings.","Lexicographic ordering on bit strings.","Create a new zero-length bit string.","Set the <code>ndx</code>th bit to <code>bit</code>.","Longest shared prefix of two bit strings.","Longest shared prefix of two bit strings.","Longest shared prefix of two bit strings.","Length of the longest shared prefix of two bit strings.","Length of the longest shared prefix of two bit strings.","Length of the longest shared prefix of two bit strings.","Partial ordering on bit strings.","Partial ordering on bit strings.","Partial ordering on bit strings.","A bit string with fixed length.","Iterator to iterate over all <code>FixedBitString</code> values with a …","","","","","check whether another bit string <code>other</code> shares the first …","Flips the <code>ndx</code>th bit.","Flips the <code>ndx</code>th bit.","Flips the <code>ndx</code>th bit.","","","Get the <code>ndx</code>th bit.","Treat bit string as integer, where bit 0 is the most …","","","Whether all bits in [ndx..] are <code>false</code>.","Whether all bits in [ndx..] are <code>true</code>.","Iterate through all bit strings until <code>inc</code> overflows.","Iterate through all bit strings until <code>inc</code> overflows.","Iterate through all bit strings until <code>inc</code> overflows.","Length of the bit string in bits.","New bit string with all bits set to <code>false</code>.","New bit string with all bits set to <code>true</code>.","","Set the <code>ndx</code>th bit to <code>false</code>.","Set the <code>ndx</code>th bit to <code>false</code>.","Set the <code>ndx</code>th bit to <code>false</code>.","Set the <code>ndx</code>th bit to <code>true</code>.","Set the <code>ndx</code>th bit to <code>true</code>.","Set the <code>ndx</code>th bit to <code>true</code>.","Set the <code>ndx</code>th bit to <code>bit</code>.","Set all bits in [ndx..] to <code>false</code>.","Set all bits in [ndx..] to <code>true</code>.","Length of the longest shared prefix of two bit strings.","Length of the longest shared prefix of two bit strings.","Length of the longest shared prefix of two bit strings.","","","","","Generic helper methods to treat [u*]-slices as big endian …","check whether another bit string <code>other</code> shares the first …","bits in a single element","bits in a single element","Flips the <code>ndx</code>th bit.","Get the <code>ndx</code>th bit.","increment from right; don’t touch first <code>prefix</code> bits; …","Whether all bits from [ndx..] are <code>false</code>.","Whether all bits from [ndx..] are <code>true</code>.","integer with single bit set. bit 0 is the highest bit (big …","Set the <code>ndx</code>th bit to <code>false</code>.","Set the <code>ndx</code>th bit to <code>true</code>.","Set the <code>ndx</code>th bit to <code>bit</code>.","Set the <code>ndx</code>th bit to <code>bit</code>.","Set all bits from [ndx..] to <code>false</code>.","Set all bits from [ndx..] to <code>true</code>.","Length of the longest shared prefix of two bit strings."],"i":[0,0,0,1,2,0,2,2,2,1,2,2,2,2,3,2,2,2,0,1,2,2,2,1,3,2,2,3,2,3,3,1,3,2,2,2,3,3,1,2,2,1,3,2,3,3,2,2,2,2,2,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,4,4,4,4,3,3,3,3,4,4,3,3,4,4,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"f":[null,null,null,[[["bool",15]]],[[["bool",15]]],null,[[]],[[]],[[]],[[["usize",15]]],[[["usize",15]]],[[],["bitlengthstring",3]],[[]],[[],["ordering",4]],[[["usize",15]],["bool",15]],[[],["bool",15]],[[]],[[],["bool",15]],null,[[["usize",15]]],[[["usize",15]]],[[["formatter",3]],["result",6]],[[]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[]],[[["usize",15]],["bool",15]],[[]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],[["option",4,["ordering"]],["ordering",4]]],[[["usize",15],["bool",15]]],[[["usize",15],["bool",15]]],[[["usize",15],["bool",15]]],[[["usize",15]]],[[["usize",15]]],[[],["usize",15]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,[[["bool",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]],["bool",15]],[[],["usize",15]],[[],["ordering",4]],[[],["ordering",4]],[[],["ordering",4]],[[]],[[["usize",15],["bool",15]]],[[]],[[]],[[]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],[["option",4,["ordering"]],["ordering",4]]],[[],[["option",4,["ordering"]],["ordering",4]]],[[],[["option",4,["ordering"]],["ordering",4]]],null,null,[[]],[[]],[[],["iter",3]],[[]],[[["usize",15]],["bool",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["formatter",3]],["result",6]],[[]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[]],[[]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[["usize",15]],["iter",3]],[[["usize",15]],["iter",3]],[[["usize",15]],["iter",3]],[[],["usize",15]],[[]],[[]],[[],["option",4]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15],["bool",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]],["usize",15]],[[["usize",15]],["usize",15]],[[["usize",15]],["usize",15]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,[[["usize",15]],["bool",15]],[[],["usize",15]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[["usize",15]],["bool",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15],["bool",15]]],[[["usize",15],["bool",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]],["usize",15]]],"p":[[8,"BitString"],[3,"BitLengthString"],[8,"FixedBitString"],[3,"Iter"],[8,"BigEndianBitString"]]},\
"bitstring_trees":{"doc":"provide trees based on bitstrings","t":[0,0,3,13,3,3,3,13,4,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,3,13,3,3,3,13,4,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12],"n":["map","set","InnerNode","InnerNode","Iter","IterFull","Leaf","Leaf","Node","RadixMap","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","default","fmt","fmt","fmt","fmt","from","from","from","from","from","from","insert","insert_uncompressed","into","into","into","into","into","into","into_iter","into_iter","iter","iter_full","key","key","key","left","new","new","new","next","next","right","root","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","0","0","InnerNode","InnerNode","Iter","IterFull","Leaf","Leaf","Node","RadixSet","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","default","fmt","fmt","fmt","fmt","from","from","from","from","from","from","insert","into","into","into","into","into","into","into_iter","into_iter","iter","iter_full","key","key","key","left","new","new","new","next","next","right","root","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","0","0"],"q":["bitstring_trees","","bitstring_trees::map","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bitstring_trees::map::Node","","bitstring_trees::set","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","bitstring_trees::set::Node",""],"d":["map of bit strings prefixes to values","set of bit strings prefixes","Inner node with two direct children.","Inner node","Iterate over tree","Iterate over tree","Leaf nodes represent prefixes part of the set","Leaf node","Nodes of a RadixMap can be either an InnerNode (with two …","<code>RadixMap</code> is a binary tree with path-shortening; leafs mark …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Add a new prefix =&gt; value mapping.  (Partially) overwrites …","Add a new prefix =&gt; value mapping.","","","","","","","","","Iterate over all values in the map","Iterate over all values and missing values in the map","The longest shared prefix of all nodes in this sub tree.","The prefix the leaf represents","The longest shared prefix of the two contained child nodes.","The left branch; all prefixes in this sub tree have a <code>false</code>","new iterator","new iterator","New (empty) map.","","","The left branch; all prefixes in this sub tree have a <code>true</code> …","Read-only access to the tree.","","","","","","","","","","","","","","","","","","","","","","","","","Inner node with two direrct children.","Inner node","Iterate over tree","Iterate over tree","Leaf nodes represent prefixes part of the set","Leaf node","Nodes of a RadixSet can be either an InnerNode (with two …","<code>RadixSet</code> is a binary tree with path-shortening; leafs mark …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Add a new prefix to the set.","","","","","","","","","Iterate over all prefixes in the set","Iterate over all prefixes and missing prefixes in the set","The longest shared prefix of all nodes in this sub tree.","The prefix the leaf represents","The longest shared prefix of the two contained child nodes.","The left branch; all prefixes in this sub tree have a <code>false</code>","new iterator","new iterator","New (empty) set.","","","The left branch; all prefixes in this sub tree have a <code>true</code> …","Read-only access to the tree.","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,1,0,0,0,1,0,0,2,3,4,1,5,6,2,3,4,1,5,6,4,1,5,6,4,1,5,6,4,4,1,5,6,2,3,4,1,5,6,4,4,2,3,4,1,5,6,2,3,4,4,1,5,6,6,2,3,4,2,3,6,4,4,1,5,6,2,3,4,1,5,6,2,3,4,1,5,6,2,3,4,1,5,6,7,8,0,9,0,0,0,9,0,0,10,11,12,9,13,14,10,11,12,9,13,14,12,9,13,14,12,9,13,14,12,12,9,13,14,10,11,12,9,13,14,12,10,11,12,9,13,14,10,11,12,12,9,13,14,14,10,11,12,10,11,14,12,12,9,13,14,10,11,12,9,13,14,10,11,12,9,13,14,10,11,12,9,13,14,15,16],"f":[null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["radixmap",3]],[[],["node",4]],[[],["leaf",3]],[[],["innernode",3]],[[]],[[]],[[]],[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["iter",3]],[[],["iterfull",3]],[[]],[[]],[[]],[[],["node",4]],[[["radixmap",3]]],[[["radixmap",3]]],[[]],[[],["option",4]],[[],["option",4]],[[],["node",4]],[[],[["node",4],["option",4,["node"]]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["radixset",3]],[[],["node",4]],[[],["leaf",3]],[[],["innernode",3]],[[]],[[]],[[]],[[]],[[],["radixset",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["iter",3]],[[],["iterfull",3]],[[]],[[]],[[]],[[],["node",4]],[[["radixset",3]]],[[["radixset",3]]],[[]],[[],["option",4]],[[],["option",4]],[[],["node",4]],[[],[["option",4,["node"]],["node",4]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null],"p":[[4,"Node"],[3,"Iter"],[3,"IterFull"],[3,"RadixMap"],[3,"Leaf"],[3,"InnerNode"],[13,"InnerNode"],[13,"Leaf"],[4,"Node"],[3,"Iter"],[3,"IterFull"],[3,"RadixSet"],[3,"Leaf"],[3,"InnerNode"],[13,"InnerNode"],[13,"Leaf"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};