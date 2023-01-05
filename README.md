# How this mess works

- Each team has their own html file (gehRoster.html, alumniRoster.html, etc)
- Lorax, Grinch, and GEH use JS to populate the player data from a JSON file that contains the player info #ThanksRona
- Coach and Alumni tab still use html to just show data.
- all the CSS & JS is from a website templete that I can't get rid of becuase it takes care of the whole small screen/big screen and I don't know how to do that. So if it ain't broke don't break it.
- All the images are also hosted on Github and I use the image url to fetch them into the roster profiles (terrible I know...)
- 



## TODO:
1. Change main page dog picture
2. Add practice information
3. Change the about me section (to maybe practice info section??)
4. Add link to thugginbot website when Elsa finally gets his lazy ass out of bed and find a free way to host it.
5. Change the JS populate function to be 1 file and just call the function from player HTML file with the JSON link