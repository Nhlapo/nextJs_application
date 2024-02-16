const About = () => {
    return ( 
        <div>
            <h1>About</h1>
            <p>In the first two cases, had the variables been called "a", 
                the programmers would not have been misled. Of course, the 
                correct solution to both is to either rename the variable or
                 use it to hold the length. However, even if the variables are
                  named correctly, the programmer immediately assumes that its
                   name reflects its contents without checking. Meaningless 
                   variable names force the programmer to ask, "What's in this 'a'
                    variable being used as a loop bound?" It would be nice to have
                     an editor that could switch into "meaningless" mode for debugging purposes, 
                     replacing all identifiers with random letters.</p>
        </div>
     );
}
 
export default About;