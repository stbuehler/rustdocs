window.SIDEBAR_ITEMS = {"fn":[["spawn","Spawns a new asynchronous task, returning a `JoinHandle` for it."],["spawn_blocking","Runs the provided closure on a thread where blocking is acceptable."],["spawn_local","Spawns a `!Send` future on the local task set."],["unconstrained","Turn off cooperative scheduling for a future. The future will never be forced to yield by Tokio. Using this exposes your service to starvation if the unconstrained future never yields otherwise."],["yield_now","Yields execution back to the Tokio runtime."]],"mod":[["futures","Task-related futures."]],"struct":[["JoinError","Task failed to execute to completion."],["JoinHandle","An owned permission to join on a task (await its termination)."],["LocalKey","A key for task-local data."],["LocalSet","A set of tasks which are executed on the same thread."],["Unconstrained","Future for the `unconstrained` method."]]};