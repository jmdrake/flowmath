assessment = {
   "title" : "CLEP College Algebra Sample",
   "questions": [
      {
         "prompt": "What is the remainder when the polynomial `x^53 - 12x^40 - 3x^27 - 5x^21 + x^10 - 3` is divided by `x + 1`?",
         "options": {
            "A": -21,
            "B": -7,
            "C": -3,
            "D": 4,
            "E": 21
         },
         "hints": [
            "remaindertheorem"
         ],
         "solution": {
            "plan": "The remainder theorem is the fastest way to find the remainder",
            "start": "x^53 - 12x^40 - 3x^27 - 5x^21 + x^10 - 3",
            "steps": [
               {
                  "code": "(-1)^53 - 12(-1)^40 - 3(-1)^27 - 5(-1)^21 + (-1)^10 - 3",
                  "hint": "Replace each x with (-1)"
               },
               {
                  "code": -7,
                  "hint": "Use calculator"
               }
            ]
         }
      },
      {
         "prompt": "Let a, b and c be real numbers where `a!=0`.  If the equation `ax^2 + bx + c = 0` has two real solutions, which of the following statements could be true?  Indicate all such statements.",
         "options": {
            "A": "a > 0, b > 0, and c < 0",
            "B": "`b=+-sqrt(ac)`",
            "C": "ac < 0"
         },
         "type": "multiselect",
         "hints": [
            "quadraticformula"
         ],
         "solution": {
            "plan": "Test each option against quadratic formula to see if it's possibly true.",
            "start" : "(-b+-sqrt(b^2-4ac))/(2a)"
         }
      },
      {
         "prompt": "A science class launched a rocket from level ground.  The height `h`, in feet, of the rocket above the ground `t` seconds after it was launched can be modled by the function `h(t)=-16t^2+64t`.  How many seconds did it take for the rocket to return to the ground?",
         "type": "shortanswer",
         "hints": [
            "quadraticwordproblems",
            "commonfactor",
            "zeroproduct"
         ],
         "solution": {
            "plan": "Factor the equation then find the roots from the factors.  Decide which root makes sense for the word problem.",
            "start": "`h(t)=-16t^2+64t`",
            "steps": [
               {
                  "code": "16t(-t+4)",
                  "hint": "factor out 16t"
               },
               {
                  "code": "16t = 0; -t+4=0",
                  "hint": "apply zero product property"
               },
               {
                  "code": "t = 0; t = 4",
                  "hint": "solve each factor for table"
               },
               {
                  "code": 4,
                  "hint": "based on problem, only the value t=4 makes sense."
               }
            ]
         }
      },
      {
         "prompt": "At a certain shipping company, the cost to deliver a package depends on its weight. The company charges a flat rate of $7.00 for the first 5 kilograms plus $1.50 for each additional kilogram or fraction thereof. For this company, which of the following functions represents the cost C, in dollars, to deliver a package with a weight of k kilograms, where k is an integer greater than or equal to 5?",
         "options": {
            "A": "`C(k) = 7 + 1.5k `",
            "B": "`C(k) = 7(5) + 1.5k `",
            "C": "`C(k) = 7 + 1.5(k - 5) `",
            "D": "`C(k) = 7(5) + 1.5(k - 5)`",
            "E": "`C(k) = 7 + 5(k - 1.5)`"
         },
         "hints": [
            "constantrate",
            "wordproblems",
            "slopeintercept"
         ],
         "solution": {
            "plan": "Find the flat rate, rate and offset.  Test your solution for k = 5, k = 6",
            "steps": [
               "flat rate = 7; rate = 1.50 per kg over 5.",
               "`7 + 1.5(k-5)`"
            ]
         }
      },
      {
         "prompt": "The graph of the quadratic function `f` is shown the `xy`-plane. The linear function `g` is defned by `g(x) = cx` for all real numbers `x`, where `c` is a positive constant. Which of the following must be true?",
         "image": "image01.png",
         "options": {
            "A": "`f(0)>g(0)`",
            "B": "`f(a)>g(0)`",
            "C": "`f(a)>g(a)`",
            "D": "`f(a)>g(b)`",
            "E": "`f(b)>g(b)`"
         },
         "hints": [
            "lineargraph",
            "functioneval"
         ],
         "solution": {
            "plan": "Evaluate graphically and compare",
            "steps": [
               "Sketch g(x) = cx.",
               "Evaluate f(0), f(a), f(b), g(0), g(a) and g(b) compared to 0."
            ]
         }
      },
      {
         "prompt": "The table shows some values of the functions f and g. Based on the table, what is the value of `g(f(2))` ?",
         "image": "image02.png",
         "options": {
            "A": 0,
            "B": 3,
            "C": 5,
            "D": 8,
            "E": 9
         },
         "hints": [
            "functioneval",
            "functioncomp"
         ],
         "solution": {
            "plan": "Evaluate inner function then pass result to outer function.",
            "start": "g(f(2))"
         }
      },
      {
         "prompt": "At the beginning of each year, the population of a small town is predicted to be 2 percent greater than its population at the beginning of the preceding year If P is the population of the town on January 1, 2018 what is the predicted population of the town on January 1, 2023?",
         "options": {
            "A": "`(5-0.02)P`",
            "B": "`(1+5*0.02)P`",
            "C": "`(1.02+5)P`",
            "D": "`(0.2)^5P`",
            "E": "`(1.02)^5P`"
         },
         "hints": [
            "exponentialgrowth",
            "wordproblems"
         ]
      },
      {
         "prompt": "Let `log_ax=2` , `log_ay=3` , and log a `z=4`, where `a` is a positive number that is not equal to 1. What is the value of `log_a((x^3y)/sqrt(z))`?",
         "type": "shortanswer",
         "hints": [
            "logquotientprop",
            "logproductprop",
            "logpowerprop",
            "rationalexponent"
         ],
         "solution": {
            "plan": "Use log properties to break apart expression until each log can be evaluated.",
            "start": "log_a((x^3y)/sqrt(z))"
         }
      },
      {
         "prompt": "Which of the following is equal to `((i+3)(i+2))/i^2`?",
         "options": {
            "A": "`5i+7`",
            "B": "`5i+5`",
            "C": "`5i-5`",
            "D": "`-5i+7`",
            "E": "`-5i-5`"
         },
         "solution": {
            "plan": "FOIL the top then simplify",
            "start": "((i+3)(i+2))/i^2"
         },
         "hints": [
            "complexnumbers"
         ]
      },
      {
         "prompt": "What is the highest-degree term in the expansion of `((x+2)^5-x^5)/2`?",
         "options": {
            "A": "`x^4/2`",
            "B": "`5x^4`",
            "C": "`10x^4`",
            "D": "`x^5/2`",
            "E": "`x^5`"
         },
         "hints": [
            "binomialtheorem"
         ],
         "solution": {
            "plan": "Use Pascal's triangle expanded to level 5 to find coefficients then expand using binomrial theorem.",
            "start": "((x+2)^5-x^5)/2"
         }
      }
   ],
   "answers": [
      "B",
      "AC",
      4,
      "C",
      "C",
      "C",
      "E",
      7,
      "E",
      "B"
   ],
   "hints": {
      "remaindertheorem": {
         "name": "Remainder theorem",
         "description": "The remainder theorem states that given a polynomial function `f(x)` and a binomial `x+k`, the remainder of `f(x)/(x+k)` is `f(-k)`.",
         "example": "Let `f(a) = a^3-12a^2-42`.  The remainder of `f(a) / (a-3)` is `f(3)` which equals `(3)^3-12(3)^2-42=-123`"
      },
      "quadraticstandardform": {
         "name": "Quadratic Standard Form",
         "description": "The Quadratic Standard Form equation is `ax^2+bx+c=0` where a, b and c are constants.  A quadratic equation must be in standard form to factor by reverse FOIL or the quadratic formula.",
         "example": "To put the equation `x(x+2)=3`, distribute `x` then subtract `3` from both sides to get `x^2+2x-3=0`"
      },
      "quadraticformula": {
         "name": "Quadratic Formula",
         "description": "The quadratic formula let's you find roots of a quadratic euqation that is difficult to factor.  The formula is `(-b+-sqrt(b^2-4ac))/(2a)`.  The equation must be instandard form `ax+by+c=0`.  The discriminant is the part under the the `sqrt()` or `b^2-4ac`.  If the discriminat is negative you have two complex roots.  It it is 0 you have one real root.  If it is positive you have two real roots.",
         "example": "Consider the equation `2x^2+5x+1=0`.  The roots are `(-5+-sqrt(5^2-4(2)(1)))/(2(2))=(-5+-sqrt(25-8))/4=(-5+-sqrt(17))/4`"
      },
      "commonfactor": {
         "name": "Common Factor",
         "description": "One simple way to factor is to find common factors in each term.  Then reverse the distributive property.  The distributive property is `a(b+c)=ab+ac`.  But if you are given `ab+ac` then write `a((ab)/a+(ac)/a)=a(b+c)`",
         "example": "The expression `2x^2+4x` factors to `2x(x+2)`"
      },
      "zeroproduct": {
         "name": "Zero product property",
         "description": "The zero product property states that if a product equals 0 then one or more of the factors equal to zero.  This is used to find the roots of a quadratic equation by first factoring the equation and then solving each factor for 0.",
         "example": "Find the roots of `x^2+x-6=0`.  That factors to `(x+3)(x-2)=0`.  So `x+3=0` or `x-2=0`.  Solving each equation for `x` gives `x=-3` or `x=2` or `-3,2` as the roots."
      },
      "wordproblems": {
         "name": "Word Problems",
         "description": "There are 4 basic steps to solving word problems. <br>\n1) Identify the problem.  Understand what the problem is asking.  What do you know and what do you need to find out? <br>\n  a) Read the problem <br>\n  b) Paraphrase the problem in your own words<br> \n  c) Write down key information. <br>\n2) Develop a solution.  Decide on a strategy to use to solve the problem.  What math skills will you need?  <br> \n  a) Draw a picture or diagram if necessary. <br>\n  b) Make a plan to solve the problem.  <br>\n3) Evaluate (Solve!) Set up the appropriate math operations and formulas.<br>  \n  These keywords can go a long way in helping you determine how to set up the algebra equations.<br> \n  Here's a list of some common keywords to get you started.<br>\n  * Addition/Subtraction - added to, combined, increased by, more than, sum, total, decreased by, difference of, less than<br> \n  * Multiplication - increased by a factor of, multiplied by, times <br>\n  * Division - out of, per, ratio of<br>\n  * Equals - are, gives, is, will be.<br> \n4) Assess your answer.  Check your answer to make sure it is correct.<br>\n  a) Read the problem again.<br>\n  b) Make sure you understand the question.<br>\n  c) Check for mathematical errors.<br>",
         "example": "Isabel worked 20 hours last week and earned $145.80.  Adam worked 15 hours last week and earned $112.50.  How much more does Adam earn per hour?  <br>\nSolution. <br>\nStep 1) We need to find out how much more Adam makes per hour than Isabell.<br>\nStep 2) We need to find Adams hourly rate, Isabell's hourly rate and then take the difference.<br>\nStep 3) Keywords are 'per hour' (division) and 'much more..than' (subtraction). \n  `R_A` = Adam's hourly rate.  `R_I` = Isabell's hourly rate.  Answer = `R_A-R_I` = `$112.50/15 - $145.80/20 = $7.50 - $7.29 = $0.21`  <br>\nStep 4) Check your work.<br>Adam = $7.50 * 15 = $112.50. <br> Isabel = $7.29 * 20 = $145.80 <br> $7.50 - $7.29 = $0.21."
      },
      "quadraticwordproblems": {
         "name": "Quadratic word problems.",
         "description": "Quadratic word problems are solved by: 1) Identifying the quadratic equation 2) writing the quadratic equation in standard form 3) Finding the roots by factoring or using the quadratic formula 4) Seeing which roots make sense.",
         "example": "A plot of land for sale has a width of x ft., and a length that is 8ft less than its width.\nA farmer will only purchase the land if it measures 240 square feet. What value of x will cause the farmer to purchase the land? <br>\nStep 1) Identify the quadratic equation.  `x` is the width. `x-8` is the length.  Area of a rectangle is length x width or `(x-8)x=240`.<br>\nStep 2) Distribute x to put in standard form.  `x^2-8x=240` => `x^2-8x-240=0`. <br>\nStep 3) We can factor by Reverse FOIL.  <br>\nFactors of -240 are 1,-240; 2,-120; 3,-80; 4,-60; 5,-48; 6,-40; 8,-30; 10,-24; 12,-20; 15,-16.<br>\nThe factors that sum to -8 are 12, -20.  So the factors are `(x+12)(x-20)`.  <br>\nUsing the zero product property to find roots. `x+12=0` and `x-20=0`.  Solving each for x gives -12 and 20 as the roots.  <br>\nStep 4) All land measurements are positive so x = 20."
      },
      "slopeintercept": {
         "name": "Slope intercept form.",
         "description": "Slope intercept form of a linear equation is `y = mx + b` where `m` is the slope and `b` is the `y`=intercept.  To put an equation in slope intercept form, solve the equation for y.",
         "example": "Find slope of equation `4x+2y=6`.  <br>\nSolve for y by subtracting x from both sides and dividing through by 2.  `y=-2x+6`.  Slope = 6."
      },
      "constantrate": {
         "name": "Constant Rate word problems.",
         "description": "Constant rate word problems are are problems where there may be an initial value that changes over time at a constant rate.  <br>\nYou mabe be asked to compare to different rates to see when they cross. \nAs these are linear equations, use slope intercept form `y=mx+b`.  <br>\nStep 1) Identify initial values (b) and rates (m).  <br>\nStep 2) Put the equation or equations in either slope intercept form, `y=mx+b` form or point slope form, `y-y1=m(x-x1)`.<br>\nStep 3) Solve.",
         "example": "Two hot air balloons, one purple and one gold, took off at the same time.\nThe purple balloon started from sea level and the gold balloon started from a hill 15 meters above sea level. \nThe gold balloon began climbing at a constant rate of 2 meters per second. The purple balloon began climbing at 2.5 meters per second.  \nAfter how many seconds were the balloons at the same altitude?<br>\nStep 1) `b_g=15`; `b_p=0`; `m_g=2`; `m_p=2.5`<br>\nStep 2) `y=2x+15`; `y=2.5x`<br>\nStep 3) `2.5x=2x+15`; `.5x=15`; `x=30`"
      },
      "quadraticgraphs": {
         "name": "Graphing quadratic equations and functions",
         "description": "The graph of a quadratic function `x^2` is a parabola that starts at the origin and curves up as x moves to the left or the right of the origing.  The vertex form of a quadratic function is `f(x)=a(x-h)^2+k` where `a` dilates the graph and h and k translate it up or down or left or right.  A positive `h` translates to the left and a negative `h` translates to the right.  A positive `k` translates up and a negative `k` translates down.  If `a` is negative the graph opens down.  If it is positive it opens up.  If `0>|a|>1` then the graph is flattened. If `|a|>=1` then the graph is stretched.",
         "example": null
      },
      "lineargraph": {
         "name": "Graphing linear equations and functions",
         "description": "The graph of a linear equation `y=mx+b` is a straight line that intercepts the y axis at the point `b` and has a slope of `m`.  If `m` is positive the line goes up when going right.  If `m` is negative the line goes down to the right.  If `m` is 0 the line is horizontal.  A vertical line has an undefined slope.",
         "example": null
      },
      "functioneval": {
         "name": "Function evaluation",
         "description": "When evaluating a function `f(x)` replace every `x` with the the value passed in the parenthesis.",
         "example": "Evaluate the function `f(x)=x^2-3` for: `f(3) = (3)^2-3`.  For `f(a) = (a)^2-3`.  For `f(a^2)=(a^2)^2-3`."
      },
      "functioncomp": {
         "name": "Function composition",
         "description": "Function composition is passing the definition of one function as an argument to another function.",
         "example": "Consider the functions `f(x)=x^2-3` and `g(x)=x-4`.  The `f(g(x))=(x-4)^2-3`."
      },
      "exponentialgrowth": {
         "name": "Exponential growth and decay.",
         "description": "Exponential functions are functions were the variable is in the exponent.  `f(x)=2^x` is an example of an exponential function.  `f(x)=x^2` is NOT an exponential function because there is only a constant in the exponent.  The exponential growth function is `f(t)=a(1+r)^t` where `a` is the initial amount, `r` is the rate (usually expressed as a percentage) and `t` is the number of time periods.  Exponential decay is `f(t)=a(1-r)^t`. If `r` is expressed as a precentage, be sure to divide it by 100 or use the % button on your calculator.",
         "example": "$1,000 in deposited in a bank account with interest of 2.5 percent compounded annually.  How much money will be in the bank after 5 years?  `f(5)=1000(1+2.5/100)^5=1131.41`"
      },
      "logproductprop": {
         "name": "Log product property",
         "description": "`log_bxy = log_bx+log_by`",
         "example": "`log_4 5x=log_4 5 + log_4x`"
      },
      "logquotientprop": {
         "name": "Log quotient property",
         "description": "`log_b(x/y) = log_bx-log_by`",
         "example": "`log(8/x)=log8 - logx`"
      },
      "logpowerprop": {
         "name": "Log power property",
         "description": "`log_b x^p = plog_bx`",
         "example": "`lnx^3=3lnx` Remember that rational expressions can be converted to fractional exponents.  So `log_3root(3)(x^2)=log_3x^(2/3)=2/3log_3x`, provide that `x > 0`."
      },
      "complexnumbers": {
         "name": "Complex numbers",
         "description": "In general you cannot take the square root of a negative number.  But sometimes it's convenient to pretend that you can.  To do that mathematicians came up with the imaginary number `i` so that `i^2=-1`.  Thus `sqrt(-4)=sqrt(4i^2)=2i`.  Complex numbers are binomials of the form `a+bi` where `a` is the real part and `bi` is the imaginary part.  You can add, subtract and multiply complex numbers as you would other binomials.  Complex division is a bit different however.",
         "example": "`(3+4i) + (2+i)=(5+5i)`; `(3+4i)-(2+i)=(1+3i)` ; `(3+4i)(2+i)=6+3i+8i+4i^2=6+11i-4=2+11i`; `(3+4i)(3-4i)=9-16i^2=9+16=25`  Note the conjugate of a binomial is the binomial with the sign between the two terms flipped.  The conjugate of `a+b` is `a-b`.  When you multiply a complex number by its conjugate you get a real number."
      },
      "binomialtheorem": {
         "name": "Binomial theorem",
         "description": "The binomial theorem allows you to more easily expand a binomial raised to a power.  You could expand `(x+4)^4` by rewriting it as `(x+4)(x+4)(x+4)(x+4)` and doing all of the distributive multiplications.  The Binomial Theorem is `(a+b)^n=sum_(i-1)^n ((n)(k))a^(n-k)b^k`.  The simple way to think of this is instead of using `((n)(k))` for the coefficients, use Pascal's triangle.  Pascal's triangle is like bowling pins with '1' in the first row, '1 1' in the second row, '1 2 1' in the third row, '1 3 3 1' in the forth row etc.  Each row begins and ends with '1' and the intermediate values are the sum of the values above them.  The exponents for `a` start at `n` and count down to zero.",
         "example": "Expand `(x+2)^4`.  The Pascal's triangle values for `n=4` are 1 4 6 4 1.  So `(x+2)^4 = x^4 + 4x^3(2) + 6x^2(2)^2 + 4(x)(2)^3+2^4=x^4+8x^3+24x^2+32x+16`"
      }
   }
}