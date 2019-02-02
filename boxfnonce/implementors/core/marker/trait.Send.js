(function() {var implementors = {};
implementors["boxfnonce"] = [{text:"impl&lt;'a, Arguments, Result&nbsp;=&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"boxfnonce/struct.BoxFnOnce.html\" title=\"struct boxfnonce::BoxFnOnce\">BoxFnOnce</a>&lt;'a, Arguments, Result&gt;",synthetic:true,types:["boxfnonce::no_send::BoxFnOnce"]},{text:"impl&lt;'a, Arguments, Result&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"boxfnonce/struct.SendBoxFnOnce.html\" title=\"struct boxfnonce::SendBoxFnOnce\">SendBoxFnOnce</a>&lt;'a, Arguments, Result&gt;",synthetic:true,types:["boxfnonce::send::SendBoxFnOnce"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
