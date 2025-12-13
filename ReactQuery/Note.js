what is  React query ?

            ->it is library for fetching date in a react application
  
            
why is react query? 

            -> Since React is a UI library, there is no specific pattern for data fetching 
            -> useState and useEffect hook are used 
            -> if the data is needed throughout the app, we tend touse state managemnt libraries
            -> Most of the state managemnt  libraries are good fpr working with client side 
            -> State management libraries are not great for working with asynchrounous or server state 
        
            
Client vs server state ?

            client state  => persisted in your app memory and accessing or updating it is synchronous

            server State => .persisted remotely and requires asynchrounous APIs for fetching or updating 
                            .has shared ownership
                            .Data can be updated by some one else without your knowleadge
                            .UI data may not be in sunc with the remote data 
                            .Challenging when you have to deal with caching, deduping multiple requestes for the same date,
                             updating stale date in the background, performance optimization etc 

