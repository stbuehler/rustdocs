initSidebarItems({"constant":[["MAX_DOMAIN_NAME","Maximum length of full name including trailing dot and terminating NULL"]],"enum":[["BrowsedFlag","Flags for `BrowseResult`"],["Enumerate","Whether to enumerate domains which are browsed or domains for which registrations can be made."],["EnumeratedFlag","Flags for `EnumerateDomains`"],["Error","API Error"],["Interface","Network interface"],["QueriedRecordFlag","Flags for `QueryRecordResult`"],["QueryRecordFlag","Flags used to query for a record"],["RegisterFlag","Flags used to register service"],["RegisterRecordFlag","Flags used to register a record"],["TimeoutStreamError","Error produces by `TimeoutStream`"]],"fn":[["browse","Browses for available services"],["connect","Create `Connection` to register records with"],["enumerate_domains","Enumerates domains that are recommended for registration or browsing"],["query_record","Query for an arbitrary DNS record"],["reconfirm_record","Purge record from cache"],["register","Registers a service"],["resolve","Find hostname and port (and more) for a service"]],"struct":[["Browse","Pending browse request"],["BrowseResult","Browse result"],["BrowsedFlags","Set of `BrowsedFlag`s"],["Connection","Connection to register records with"],["EnumerateDomains","Pending domain enumeration"],["EnumerateResult","Domain enumeration result"],["EnumeratedFlags","Set of `EnumeratedFlag`s"],["FullName","Full name consiting of (up to) three parts"],["InterfaceIndex","Network interface index"],["QueriedRecordFlags","Set of `QueriedRecordFlag`s"],["QueryRecord","Pending query"],["QueryRecordFlags","Set of `QueryRecordFlag`s"],["QueryRecordResult","Query result"],["Record","A successful record registration"],["Register","Pending registration"],["RegisterFlags","Set of `RegisterFlag`s"],["RegisterRecord","Pending record registration"],["RegisterRecordFlags","Set of `RegisterRecordFlag`s"],["RegisterResult","Service registration result"],["Registration","Successful registration"],["Resolve","Pending resolve request"],["ResolveResult","Resolve result"],["TimeoutStream","Add a timeout to a stream; each time an item is received the timer is reset"]],"trait":[["GetRemote","Access `Remote` handle of `Future`s and `Stream`s supporting it"],["TimeoutTrait","`futures::Stream` extension to simplify building `TimeoutStream`"]]});