import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /*-------------------------------------------------
    Style file contain theme components style
    -------------------------------------------------*/
    @import url(https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,600);
    
   
    /*----------------------------------------
      General Layout Style
    ------------------------------------------*/
    html,
    body
    {
        height: 100%;
    }
    
    body
    {
        background-color: ${props => props.theme.bodyBgColor};
    }
    .clearfix {
      overflow: auto;
    }  
    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    
    /*--------------------------------------------------------------
    Materialize file contain extended material ui based on theme
    ---------------------------------------------------------------*/
            .materialize-red
            {
                background-color: #e51c23 !important;
            }
            
            .materialize-red-text
            {
                color: #e51c23 !important;
            }
            
            .materialize-red.lighten-5
            {
                background-color: #fdeaeb !important;
            }
            
            .materialize-red-text.text-lighten-5
            {
                color: #fdeaeb !important;
            }
            
            .materialize-red.lighten-4
            {
                background-color: #f8c1c3 !important;
            }
            
            .materialize-red-text.text-lighten-4
            {
                color: #f8c1c3 !important;
            }
            
            .materialize-red.lighten-3
            {
                background-color: #f3989b !important;
            }
            
            .materialize-red-text.text-lighten-3
            {
                color: #f3989b !important;
            }
            
            .materialize-red.lighten-2
            {
                background-color: #ee6e73 !important;
            }
            
            .materialize-red-text.text-lighten-2
            {
                color: #ee6e73 !important;
            }
            
            .materialize-red.lighten-1
            {
                background-color: #ea454b !important;
            }
            
            .materialize-red-text.text-lighten-1
            {
                color: #ea454b !important;
            }
            
            .materialize-red.darken-1
            {
                background-color: #d0181e !important;
            }
            
            .materialize-red-text.text-darken-1
            {
                color: #d0181e !important;
            }
            
            .materialize-red.darken-2
            {
                background-color: #b9151b !important;
            }
            
            .materialize-red-text.text-darken-2
            {
                color: #b9151b !important;
            }
            
            .materialize-red.darken-3
            {
                background-color: #a21318 !important;
            }
            
            .materialize-red-text.text-darken-3
            {
                color: #a21318 !important;
            }
            
            .materialize-red.darken-4
            {
                background-color: #8b1014 !important;
            }
            
            .materialize-red-text.text-darken-4
            {
                color: #8b1014 !important;
            }
            
            .red
            {
                background-color: #f44336 !important;
            }
            
            .red-text
            {
                color: #f44336 !important;
            }
            
            .red.lighten-5
            {
                background-color: #ffebee !important;
            }
            
            .red-text.text-lighten-5
            {
                color: #ffebee !important;
            }
            
            .red.lighten-4
            {
                background-color: #ffcdd2 !important;
            }
            
            .red-text.text-lighten-4
            {
                color: #ffcdd2 !important;
            }
            
            .red.lighten-3
            {
                background-color: #ef9a9a !important;
            }
            
            .red-text.text-lighten-3
            {
                color: #ef9a9a !important;
            }
            
            .red.lighten-2
            {
                background-color: #e57373 !important;
            }
            
            .red-text.text-lighten-2
            {
                color: #e57373 !important;
            }
            
            .red.lighten-1
            {
                background-color: #ef5350 !important;
            }
            
            .red-text.text-lighten-1
            {
                color: #ef5350 !important;
            }
            
            .red.darken-1
            {
                background-color: #e53935 !important;
            }
            
            .red-text.text-darken-1
            {
                color: #e53935 !important;
            }
            
            .red.darken-2
            {
                background-color: #d32f2f !important;
            }
            
            .red-text.text-darken-2
            {
                color: #d32f2f !important;
            }
            
            .red.darken-3
            {
                background-color: #c62828 !important;
            }
            
            .red-text.text-darken-3
            {
                color: #c62828 !important;
            }
            
            .red.darken-4
            {
                background-color: #b71c1c !important;
            }
            
            .red-text.text-darken-4
            {
                color: #b71c1c !important;
            }
            
            .red.accent-1
            {
                background-color: #ff8a80 !important;
            }
            
            .red-text.text-accent-1
            {
                color: #ff8a80 !important;
            }
            
            .red.accent-2
            {
                background-color: #ff5252 !important;
            }
            
            .red-text.text-accent-2
            {
                color: #ff5252 !important;
            }
            
            .red.accent-3
            {
                background-color: #ff1744 !important;
            }
            
            .red-text.text-accent-3
            {
                color: #ff1744 !important;
            }
            
            .red.accent-4
            {
                background-color: #d50000 !important;
            }
            
            .red-text.text-accent-4
            {
                color: #d50000 !important;
            }
            
            .pink
            {
                background-color: #e91e63 !important;
            }
            
            .pink-text
            {
                color: #e91e63 !important;
            }
            
            .pink.lighten-5
            {
                background-color: #fce4ec !important;
            }
            
            .pink-text.text-lighten-5
            {
                color: #fce4ec !important;
            }
            
            .pink.lighten-4
            {
                background-color: #f8bbd0 !important;
            }
            
            .pink-text.text-lighten-4
            {
                color: #f8bbd0 !important;
            }
            
            .pink.lighten-3
            {
                background-color: #f48fb1 !important;
            }
            
            .pink-text.text-lighten-3
            {
                color: #f48fb1 !important;
            }
            
            .pink.lighten-2
            {
                background-color: #f06292 !important;
            }
            
            .pink-text.text-lighten-2
            {
                color: #f06292 !important;
            }
            
            .pink.lighten-1
            {
                background-color: #ec407a !important;
            }
            
            .pink-text.text-lighten-1
            {
                color: #ec407a !important;
            }
            
            .pink.darken-1
            {
                background-color: #d81b60 !important;
            }
            
            .pink-text.text-darken-1
            {
                color: #d81b60 !important;
            }
            
            .pink.darken-2
            {
                background-color: #c2185b !important;
            }
            
            .pink-text.text-darken-2
            {
                color: #c2185b !important;
            }
            
            .pink.darken-3
            {
                background-color: #ad1457 !important;
            }
            
            .pink-text.text-darken-3
            {
                color: #ad1457 !important;
            }
            
            .pink.darken-4
            {
                background-color: #880e4f !important;
            }
            
            .pink-text.text-darken-4
            {
                color: #880e4f !important;
            }
            
            .pink.accent-1
            {
                background-color: #ff80ab !important;
            }
            
            .pink-text.text-accent-1
            {
                color: #ff80ab !important;
            }
            
            .pink.accent-2
            {
                background-color: #ff4081 !important;
            }
            
            .pink-text.text-accent-2
            {
                color: #ff4081 !important;
            }
            
            .pink.accent-3
            {
                background-color: #f50057 !important;
            }
            
            .pink-text.text-accent-3
            {
                color: #f50057 !important;
            }
            
            .pink.accent-4
            {
                background-color: #c51162 !important;
            }
            
            .pink-text.text-accent-4
            {
                color: #c51162 !important;
            }
            
            .purple
            {
                background-color: #9c27b0 !important;
            }
            
            .purple-text
            {
                color: #9c27b0 !important;
            }
            
            .purple.lighten-5
            {
                background-color: #f3e5f5 !important;
            }
            
            .purple-text.text-lighten-5
            {
                color: #f3e5f5 !important;
            }
            
            .purple.lighten-4
            {
                background-color: #e1bee7 !important;
            }
            
            .purple-text.text-lighten-4
            {
                color: #e1bee7 !important;
            }
            
            .purple.lighten-3
            {
                background-color: #ce93d8 !important;
            }
            
            .purple-text.text-lighten-3
            {
                color: #ce93d8 !important;
            }
            
            .purple.lighten-2
            {
                background-color: #ba68c8 !important;
            }
            
            .purple-text.text-lighten-2
            {
                color: #ba68c8 !important;
            }
            
            .purple.lighten-1
            {
                background-color: #ab47bc !important;
            }
            
            .purple-text.text-lighten-1
            {
                color: #ab47bc !important;
            }
            
            .purple.darken-1
            {
                background-color: #8e24aa !important;
            }
            
            .purple-text.text-darken-1
            {
                color: #8e24aa !important;
            }
            
            .purple.darken-2
            {
                background-color: #7b1fa2 !important;
            }
            
            .purple-text.text-darken-2
            {
                color: #7b1fa2 !important;
            }
            
            .purple.darken-3
            {
                background-color: #6a1b9a !important;
            }
            
            .purple-text.text-darken-3
            {
                color: #6a1b9a !important;
            }
            
            .purple.darken-4
            {
                background-color: #4a148c !important;
            }
            
            .purple-text.text-darken-4
            {
                color: #4a148c !important;
            }
            
            .purple.accent-1
            {
                background-color: #ea80fc !important;
            }
            
            .purple-text.text-accent-1
            {
                color: #ea80fc !important;
            }
            
            .purple.accent-2
            {
                background-color: #e040fb !important;
            }
            
            .purple-text.text-accent-2
            {
                color: #e040fb !important;
            }
            
            .purple.accent-3
            {
                background-color: #d500f9 !important;
            }
            
            .purple-text.text-accent-3
            {
                color: #d500f9 !important;
            }
            
            .purple.accent-4
            {
                background-color: #a0f !important;
            }
            
            .purple-text.text-accent-4
            {
                color: #a0f !important;
            }
            
            .deep-purple
            {
                background-color: #673ab7 !important;
            }
            
            .deep-purple-text
            {
                color: #673ab7 !important;
            }
            
            .deep-purple.lighten-5
            {
                background-color: #ede7f6 !important;
            }
            
            .deep-purple-text.text-lighten-5
            {
                color: #ede7f6 !important;
            }
            
            .deep-purple.lighten-4
            {
                background-color: #d1c4e9 !important;
            }
            
            .deep-purple-text.text-lighten-4
            {
                color: #d1c4e9 !important;
            }
            
            .deep-purple.lighten-3
            {
                background-color: #b39ddb !important;
            }
            
            .deep-purple-text.text-lighten-3
            {
                color: #b39ddb !important;
            }
            
            .deep-purple.lighten-2
            {
                background-color: #9575cd !important;
            }
            
            .deep-purple-text.text-lighten-2
            {
                color: #9575cd !important;
            }
            
            .deep-purple.lighten-1
            {
                background-color: #7e57c2 !important;
            }
            
            .deep-purple-text.text-lighten-1
            {
                color: #7e57c2 !important;
            }
            
            .deep-purple.darken-1
            {
                background-color: #5e35b1 !important;
            }
            
            .deep-purple-text.text-darken-1
            {
                color: #5e35b1 !important;
            }
            
            .deep-purple.darken-2
            {
                background-color: #512da8 !important;
            }
            
            .deep-purple-text.text-darken-2
            {
                color: #512da8 !important;
            }
            
            .deep-purple.darken-3
            {
                background-color: #4527a0 !important;
            }
            
            .deep-purple-text.text-darken-3
            {
                color: #4527a0 !important;
            }
            
            .deep-purple.darken-4
            {
                background-color: #311b92 !important;
            }
            
            .deep-purple-text.text-darken-4
            {
                color: #311b92 !important;
            }
            
            .deep-purple.accent-1
            {
                background-color: #b388ff !important;
            }
            
            .deep-purple-text.text-accent-1
            {
                color: #b388ff !important;
            }
            
            .deep-purple.accent-2
            {
                background-color: #7c4dff !important;
            }
            
            .deep-purple-text.text-accent-2
            {
                color: #7c4dff !important;
            }
            
            .deep-purple.accent-3
            {
                background-color: #651fff !important;
            }
            
            .deep-purple-text.text-accent-3
            {
                color: #651fff !important;
            }
            
            .deep-purple.accent-4
            {
                background-color: #6200ea !important;
            }
            
            .deep-purple-text.text-accent-4
            {
                color: #6200ea !important;
            }
            
            .indigo
            {
                background-color: #3f51b5 !important;
            }
            
            .indigo-text
            {
                color: #3f51b5 !important;
            }
            
            .indigo.lighten-5
            {
                background-color: #e8eaf6 !important;
            }
            
            .indigo-text.text-lighten-5
            {
                color: #e8eaf6 !important;
            }
            
            .indigo.lighten-4
            {
                background-color: #c5cae9 !important;
            }
            
            .indigo-text.text-lighten-4
            {
                color: #c5cae9 !important;
            }
            
            .indigo.lighten-3
            {
                background-color: #9fa8da !important;
            }
            
            .indigo-text.text-lighten-3
            {
                color: #9fa8da !important;
            }
            
            .indigo.lighten-2
            {
                background-color: #7986cb !important;
            }
            
            .indigo-text.text-lighten-2
            {
                color: #7986cb !important;
            }
            
            .indigo.lighten-1
            {
                background-color: #5c6bc0 !important;
            }
            
            .indigo-text.text-lighten-1
            {
                color: #5c6bc0 !important;
            }
            
            .indigo.darken-1
            {
                background-color: #3949ab !important;
            }
            
            .indigo-text.text-darken-1
            {
                color: #3949ab !important;
            }
            
            .indigo.darken-2
            {
                background-color: #303f9f !important;
            }
            
            .indigo-text.text-darken-2
            {
                color: #303f9f !important;
            }
            
            .indigo.darken-3
            {
                background-color: #283593 !important;
            }
            
            .indigo-text.text-darken-3
            {
                color: #283593 !important;
            }
            
            .indigo.darken-4
            {
                background-color: #1a237e !important;
            }
            
            .indigo-text.text-darken-4
            {
                color: #1a237e !important;
            }
            
            .indigo.accent-1
            {
                background-color: #8c9eff !important;
            }
            
            .indigo-text.text-accent-1
            {
                color: #8c9eff !important;
            }
            
            .indigo.accent-2
            {
                background-color: #536dfe !important;
            }
            
            .indigo-text.text-accent-2
            {
                color: #536dfe !important;
            }
            
            .indigo.accent-3
            {
                background-color: #3d5afe !important;
            }
            
            .indigo-text.text-accent-3
            {
                color: #3d5afe !important;
            }
            
            .indigo.accent-4
            {
                background-color: #304ffe !important;
            }
            
            .indigo-text.text-accent-4
            {
                color: #304ffe !important;
            }
            
            .blue
            {
                background-color: #2196f3 !important;
            }
            
            .blue-text
            {
                color: #2196f3 !important;
            }
            
            .blue.lighten-5
            {
                background-color: #e3f2fd !important;
            }
            
            .blue-text.text-lighten-5
            {
                color: #e3f2fd !important;
            }
            
            .blue.lighten-4
            {
                background-color: #bbdefb !important;
            }
            
            .blue-text.text-lighten-4
            {
                color: #bbdefb !important;
            }
            
            .blue.lighten-3
            {
                background-color: #90caf9 !important;
            }
            
            .blue-text.text-lighten-3
            {
                color: #90caf9 !important;
            }
            
            .blue.lighten-2
            {
                background-color: #64b5f6 !important;
            }
            
            .blue-text.text-lighten-2
            {
                color: #64b5f6 !important;
            }
            
            .blue.lighten-1
            {
                background-color: #42a5f5 !important;
            }
            
            .blue-text.text-lighten-1
            {
                color: #42a5f5 !important;
            }
            
            .blue.darken-1
            {
                background-color: #1e88e5 !important;
            }
            
            .blue-text.text-darken-1
            {
                color: #1e88e5 !important;
            }
            
            .blue.darken-2
            {
                background-color: #1976d2 !important;
            }
            
            .blue-text.text-darken-2
            {
                color: #1976d2 !important;
            }
            
            .blue.darken-3
            {
                background-color: #1565c0 !important;
            }
            
            .blue-text.text-darken-3
            {
                color: #1565c0 !important;
            }
            
            .blue.darken-4
            {
                background-color: #0d47a1 !important;
            }
            
            .blue-text.text-darken-4
            {
                color: #0d47a1 !important;
            }
            
            .blue.accent-1
            {
                background-color: #82b1ff !important;
            }
            
            .blue-text.text-accent-1
            {
                color: #82b1ff !important;
            }
            
            .blue.accent-2
            {
                background-color: #448aff !important;
            }
            
            .blue-text.text-accent-2
            {
                color: #448aff !important;
            }
            
            .blue.accent-3
            {
                background-color: #2979ff !important;
            }
            
            .blue-text.text-accent-3
            {
                color: #2979ff !important;
            }
            
            .blue.accent-4
            {
                background-color: #2962ff !important;
            }
            
            .blue-text.text-accent-4
            {
                color: #2962ff !important;
            }
            
            .light-blue
            {
                background-color: #03a9f4 !important;
            }
            
            .light-blue-text
            {
                color: #03a9f4 !important;
            }
            
            .light-blue.lighten-5
            {
                background-color: #e1f5fe !important;
            }
            
            .light-blue-text.text-lighten-5
            {
                color: #e1f5fe !important;
            }
            
            .light-blue.lighten-4
            {
                background-color: #b3e5fc !important;
            }
            
            .light-blue-text.text-lighten-4
            {
                color: #b3e5fc !important;
            }
            
            .light-blue.lighten-3
            {
                background-color: #81d4fa !important;
            }
            
            .light-blue-text.text-lighten-3
            {
                color: #81d4fa !important;
            }
            
            .light-blue.lighten-2
            {
                background-color: #4fc3f7 !important;
            }
            
            .light-blue-text.text-lighten-2
            {
                color: #4fc3f7 !important;
            }
            
            .light-blue.lighten-1
            {
                background-color: #29b6f6 !important;
            }
            
            .light-blue-text.text-lighten-1
            {
                color: #29b6f6 !important;
            }
            
            .light-blue.darken-1
            {
                background-color: #039be5 !important;
            }
            
            .light-blue-text.text-darken-1
            {
                color: #039be5 !important;
            }
            
            .light-blue.darken-2
            {
                background-color: #0288d1 !important;
            }
            
            .light-blue-text.text-darken-2
            {
                color: #0288d1 !important;
            }
            
            .light-blue.darken-3
            {
                background-color: #0277bd !important;
            }
            
            .light-blue-text.text-darken-3
            {
                color: #0277bd !important;
            }
            
            .light-blue.darken-4
            {
                background-color: #01579b !important;
            }
            
            .light-blue-text.text-darken-4
            {
                color: #01579b !important;
            }
            
            .light-blue.accent-1
            {
                background-color: #80d8ff !important;
            }
            
            .light-blue-text.text-accent-1
            {
                color: #80d8ff !important;
            }
            
            .light-blue.accent-2
            {
                background-color: #40c4ff !important;
            }
            
            .light-blue-text.text-accent-2
            {
                color: #40c4ff !important;
            }
            
            .light-blue.accent-3
            {
                background-color: #00b0ff !important;
            }
            
            .light-blue-text.text-accent-3
            {
                color: #00b0ff !important;
            }
            
            .light-blue.accent-4
            {
                background-color: #0091ea !important;
            }
            
            .light-blue-text.text-accent-4
            {
                color: #0091ea !important;
            }
            
            .cyan
            {
                background-color: #00bcd4 !important;
            }
            
            .cyan-text
            {
                color: #00bcd4 !important;
            }
            
            .cyan.lighten-5
            {
                background-color: #e0f7fa !important;
            }
            
            .cyan-text.text-lighten-5
            {
                color: #e0f7fa !important;
            }
            
            .cyan.lighten-4
            {
                background-color: #b2ebf2 !important;
            }
            
            .cyan-text.text-lighten-4
            {
                color: #b2ebf2 !important;
            }
            
            .cyan.lighten-3
            {
                background-color: #80deea !important;
            }
            
            .cyan-text.text-lighten-3
            {
                color: #80deea !important;
            }
            
            .cyan.lighten-2
            {
                background-color: #4dd0e1 !important;
            }
            
            .cyan-text.text-lighten-2
            {
                color: #4dd0e1 !important;
            }
            
            .cyan.lighten-1
            {
                background-color: #26c6da !important;
            }
            
            .cyan-text.text-lighten-1
            {
                color: #26c6da !important;
            }
            
            .cyan.darken-1
            {
                background-color: #00acc1 !important;
            }
            
            .cyan-text.text-darken-1
            {
                color: #00acc1 !important;
            }
            
            .cyan.darken-2
            {
                background-color: #0097a7 !important;
            }
            
            .cyan-text.text-darken-2
            {
                color: #0097a7 !important;
            }
            
            .cyan.darken-3
            {
                background-color: #00838f !important;
            }
            
            .cyan-text.text-darken-3
            {
                color: #00838f !important;
            }
            
            .cyan.darken-4
            {
                background-color: #006064 !important;
            }
            
            .cyan-text.text-darken-4
            {
                color: #006064 !important;
            }
            
            .cyan.accent-1
            {
                background-color: #84ffff !important;
            }
            
            .cyan-text.text-accent-1
            {
                color: #84ffff !important;
            }
            
            .cyan.accent-2
            {
                background-color: #18ffff !important;
            }
            
            .cyan-text.text-accent-2
            {
                color: #18ffff !important;
            }
            
            .cyan.accent-3
            {
                background-color: #00e5ff !important;
            }
            
            .cyan-text.text-accent-3
            {
                color: #00e5ff !important;
            }
            
            .cyan.accent-4
            {
                background-color: #00b8d4 !important;
            }
            
            .cyan-text.text-accent-4
            {
                color: #00b8d4 !important;
            }
            
            .teal
            {
                background-color: #009688 !important;
            }
            
            .teal-text
            {
                color: #009688 !important;
            }
            
            .teal.lighten-5
            {
                background-color: #e0f2f1 !important;
            }
            
            .teal-text.text-lighten-5
            {
                color: #e0f2f1 !important;
            }
            
            .teal.lighten-4
            {
                background-color: #b2dfdb !important;
            }
            
            .teal-text.text-lighten-4
            {
                color: #b2dfdb !important;
            }
            
            .teal.lighten-3
            {
                background-color: #80cbc4 !important;
            }
            
            .teal-text.text-lighten-3
            {
                color: #80cbc4 !important;
            }
            
            .teal.lighten-2
            {
                background-color: #4db6ac !important;
            }
            
            .teal-text.text-lighten-2
            {
                color: #4db6ac !important;
            }
            
            .teal.lighten-1
            {
                background-color: #26a69a !important;
            }
            
            .teal-text.text-lighten-1
            {
                color: #26a69a !important;
            }
            
            .teal.darken-1
            {
                background-color: #00897b !important;
            }
            
            .teal-text.text-darken-1
            {
                color: #00897b !important;
            }
            
            .teal.darken-2
            {
                background-color: #00796b !important;
            }
            
            .teal-text.text-darken-2
            {
                color: #00796b !important;
            }
            
            .teal.darken-3
            {
                background-color: #00695c !important;
            }
            
            .teal-text.text-darken-3
            {
                color: #00695c !important;
            }
            
            .teal.darken-4
            {
                background-color: #004d40 !important;
            }
            
            .teal-text.text-darken-4
            {
                color: #004d40 !important;
            }
            
            .teal.accent-1
            {
                background-color: #a7ffeb !important;
            }
            
            .teal-text.text-accent-1
            {
                color: #a7ffeb !important;
            }
            
            .teal.accent-2
            {
                background-color: #64ffda !important;
            }
            
            .teal-text.text-accent-2
            {
                color: #64ffda !important;
            }
            
            .teal.accent-3
            {
                background-color: #1de9b6 !important;
            }
            
            .teal-text.text-accent-3
            {
                color: #1de9b6 !important;
            }
            
            .teal.accent-4
            {
                background-color: #00bfa5 !important;
            }
            
            .teal-text.text-accent-4
            {
                color: #00bfa5 !important;
            }
            
            .green
            {
                background-color: #4caf50 !important;
            }
            
            .green-text
            {
                color: #4caf50 !important;
            }
            
            .green.lighten-5
            {
                background-color: #e8f5e9 !important;
            }
            
            .green-text.text-lighten-5
            {
                color: #e8f5e9 !important;
            }
            
            .green.lighten-4
            {
                background-color: #c8e6c9 !important;
            }
            
            .green-text.text-lighten-4
            {
                color: #c8e6c9 !important;
            }
            
            .green.lighten-3
            {
                background-color: #a5d6a7 !important;
            }
            
            .green-text.text-lighten-3
            {
                color: #a5d6a7 !important;
            }
            
            .green.lighten-2
            {
                background-color: #81c784 !important;
            }
            
            .green-text.text-lighten-2
            {
                color: #81c784 !important;
            }
            
            .green.lighten-1
            {
                background-color: #66bb6a !important;
            }
            
            .green-text.text-lighten-1
            {
                color: #66bb6a !important;
            }
            
            .green.darken-1
            {
                background-color: #43a047 !important;
            }
            
            .green-text.text-darken-1
            {
                color: #43a047 !important;
            }
            
            .green.darken-2
            {
                background-color: #388e3c !important;
            }
            
            .green-text.text-darken-2
            {
                color: #388e3c !important;
            }
            
            .green.darken-3
            {
                background-color: #2e7d32 !important;
            }
            
            .green-text.text-darken-3
            {
                color: #2e7d32 !important;
            }
            
            .green.darken-4
            {
                background-color: #1b5e20 !important;
            }
            
            .green-text.text-darken-4
            {
                color: #1b5e20 !important;
            }
            
            .green.accent-1
            {
                background-color: #b9f6ca !important;
            }
            
            .green-text.text-accent-1
            {
                color: #b9f6ca !important;
            }
            
            .green.accent-2
            {
                background-color: #69f0ae !important;
            }
            
            .green-text.text-accent-2
            {
                color: #69f0ae !important;
            }
            
            .green.accent-3
            {
                background-color: #00e676 !important;
            }
            
            .green-text.text-accent-3
            {
                color: #00e676 !important;
            }
            
            .green.accent-4
            {
                background-color: #00c853 !important;
            }
            
            .green-text.text-accent-4
            {
                color: #00c853 !important;
            }
            
            .light-green
            {
                background-color: #8bc34a !important;
            }
            
            .light-green-text
            {
                color: #8bc34a !important;
            }
            
            .light-green.lighten-5
            {
                background-color: #f1f8e9 !important;
            }
            
            .light-green-text.text-lighten-5
            {
                color: #f1f8e9 !important;
            }
            
            .light-green.lighten-4
            {
                background-color: #dcedc8 !important;
            }
            
            .light-green-text.text-lighten-4
            {
                color: #dcedc8 !important;
            }
            
            .light-green.lighten-3
            {
                background-color: #c5e1a5 !important;
            }
            
            .light-green-text.text-lighten-3
            {
                color: #c5e1a5 !important;
            }
            
            .light-green.lighten-2
            {
                background-color: #aed581 !important;
            }
            
            .light-green-text.text-lighten-2
            {
                color: #aed581 !important;
            }
            
            .light-green.lighten-1
            {
                background-color: #9ccc65 !important;
            }
            
            .light-green-text.text-lighten-1
            {
                color: #9ccc65 !important;
            }
            
            .light-green.darken-1
            {
                background-color: #7cb342 !important;
            }
            
            .light-green-text.text-darken-1
            {
                color: #7cb342 !important;
            }
            
            .light-green.darken-2
            {
                background-color: #689f38 !important;
            }
            
            .light-green-text.text-darken-2
            {
                color: #689f38 !important;
            }
            
            .light-green.darken-3
            {
                background-color: #558b2f !important;
            }
            
            .light-green-text.text-darken-3
            {
                color: #558b2f !important;
            }
            
            .light-green.darken-4
            {
                background-color: #33691e !important;
            }
            
            .light-green-text.text-darken-4
            {
                color: #33691e !important;
            }
            
            .light-green.accent-1
            {
                background-color: #ccff90 !important;
            }
            
            .light-green-text.text-accent-1
            {
                color: #ccff90 !important;
            }
            
            .light-green.accent-2
            {
                background-color: #b2ff59 !important;
            }
            
            .light-green-text.text-accent-2
            {
                color: #b2ff59 !important;
            }
            
            .light-green.accent-3
            {
                background-color: #76ff03 !important;
            }
            
            .light-green-text.text-accent-3
            {
                color: #76ff03 !important;
            }
            
            .light-green.accent-4
            {
                background-color: #64dd17 !important;
            }
            
            .light-green-text.text-accent-4
            {
                color: #64dd17 !important;
            }
            
            .lime
            {
                background-color: #cddc39 !important;
            }
            
            .lime-text
            {
                color: #cddc39 !important;
            }
            
            .lime.lighten-5
            {
                background-color: #f9fbe7 !important;
            }
            
            .lime-text.text-lighten-5
            {
                color: #f9fbe7 !important;
            }
            
            .lime.lighten-4
            {
                background-color: #f0f4c3 !important;
            }
            
            .lime-text.text-lighten-4
            {
                color: #f0f4c3 !important;
            }
            
            .lime.lighten-3
            {
                background-color: #e6ee9c !important;
            }
            
            .lime-text.text-lighten-3
            {
                color: #e6ee9c !important;
            }
            
            .lime.lighten-2
            {
                background-color: #dce775 !important;
            }
            
            .lime-text.text-lighten-2
            {
                color: #dce775 !important;
            }
            
            .lime.lighten-1
            {
                background-color: #d4e157 !important;
            }
            
            .lime-text.text-lighten-1
            {
                color: #d4e157 !important;
            }
            
            .lime.darken-1
            {
                background-color: #c0ca33 !important;
            }
            
            .lime-text.text-darken-1
            {
                color: #c0ca33 !important;
            }
            
            .lime.darken-2
            {
                background-color: #afb42b !important;
            }
            
            .lime-text.text-darken-2
            {
                color: #afb42b !important;
            }
            
            .lime.darken-3
            {
                background-color: #9e9d24 !important;
            }
            
            .lime-text.text-darken-3
            {
                color: #9e9d24 !important;
            }
            
            .lime.darken-4
            {
                background-color: #827717 !important;
            }
            
            .lime-text.text-darken-4
            {
                color: #827717 !important;
            }
            
            .lime.accent-1
            {
                background-color: #f4ff81 !important;
            }
            
            .lime-text.text-accent-1
            {
                color: #f4ff81 !important;
            }
            
            .lime.accent-2
            {
                background-color: #eeff41 !important;
            }
            
            .lime-text.text-accent-2
            {
                color: #eeff41 !important;
            }
            
            .lime.accent-3
            {
                background-color: #c6ff00 !important;
            }
            
            .lime-text.text-accent-3
            {
                color: #c6ff00 !important;
            }
            
            .lime.accent-4
            {
                background-color: #aeea00 !important;
            }
            
            .lime-text.text-accent-4
            {
                color: #aeea00 !important;
            }
            
            .yellow
            {
                background-color: #ffeb3b !important;
            }
            
            .yellow-text
            {
                color: #ffeb3b !important;
            }
            
            .yellow.lighten-5
            {
                background-color: #fffde7 !important;
            }
            
            .yellow-text.text-lighten-5
            {
                color: #fffde7 !important;
            }
            
            .yellow.lighten-4
            {
                background-color: #fff9c4 !important;
            }
            
            .yellow-text.text-lighten-4
            {
                color: #fff9c4 !important;
            }
            
            .yellow.lighten-3
            {
                background-color: #fff59d !important;
            }
            
            .yellow-text.text-lighten-3
            {
                color: #fff59d !important;
            }
            
            .yellow.lighten-2
            {
                background-color: #fff176 !important;
            }
            
            .yellow-text.text-lighten-2
            {
                color: #fff176 !important;
            }
            
            .yellow.lighten-1
            {
                background-color: #ffee58 !important;
            }
            
            .yellow-text.text-lighten-1
            {
                color: #ffee58 !important;
            }
            
            .yellow.darken-1
            {
                background-color: #fdd835 !important;
            }
            
            .yellow-text.text-darken-1
            {
                color: #fdd835 !important;
            }
            
            .yellow.darken-2
            {
                background-color: #fbc02d !important;
            }
            
            .yellow-text.text-darken-2
            {
                color: #fbc02d !important;
            }
            
            .yellow.darken-3
            {
                background-color: #f9a825 !important;
            }
            
            .yellow-text.text-darken-3
            {
                color: #f9a825 !important;
            }
            
            .yellow.darken-4
            {
                background-color: #f57f17 !important;
            }
            
            .yellow-text.text-darken-4
            {
                color: #f57f17 !important;
            }
            
            .yellow.accent-1
            {
                background-color: #ffff8d !important;
            }
            
            .yellow-text.text-accent-1
            {
                color: #ffff8d !important;
            }
            
            .yellow.accent-2
            {
                background-color: #ff0 !important;
            }
            
            .yellow-text.text-accent-2
            {
                color: #ff0 !important;
            }
            
            .yellow.accent-3
            {
                background-color: #ffea00 !important;
            }
            
            .yellow-text.text-accent-3
            {
                color: #ffea00 !important;
            }
            
            .yellow.accent-4
            {
                background-color: #ffd600 !important;
            }
            
            .yellow-text.text-accent-4
            {
                color: #ffd600 !important;
            }
            
            .amber
            {
                background-color: #ffc107 !important;
            }
            
            .amber-text
            {
                color: #ffc107 !important;
            }
            
            .amber.lighten-5
            {
                background-color: #fff8e1 !important;
            }
            
            .amber-text.text-lighten-5
            {
                color: #fff8e1 !important;
            }
            
            .amber.lighten-4
            {
                background-color: #ffecb3 !important;
            }
            
            .amber-text.text-lighten-4
            {
                color: #ffecb3 !important;
            }
            
            .amber.lighten-3
            {
                background-color: #ffe082 !important;
            }
            
            .amber-text.text-lighten-3
            {
                color: #ffe082 !important;
            }
            
            .amber.lighten-2
            {
                background-color: #ffd54f !important;
            }
            
            .amber-text.text-lighten-2
            {
                color: #ffd54f !important;
            }
            
            .amber.lighten-1
            {
                background-color: #ffca28 !important;
            }
            
            .amber-text.text-lighten-1
            {
                color: #ffca28 !important;
            }
            
            .amber.darken-1
            {
                background-color: #ffb300 !important;
            }
            
            .amber-text.text-darken-1
            {
                color: #ffb300 !important;
            }
            
            .amber.darken-2
            {
                background-color: #ffa000 !important;
            }
            
            .amber-text.text-darken-2
            {
                color: #ffa000 !important;
            }
            
            .amber.darken-3
            {
                background-color: #ff8f00 !important;
            }
            
            .amber-text.text-darken-3
            {
                color: #ff8f00 !important;
            }
            
            .amber.darken-4
            {
                background-color: #ff6f00 !important;
            }
            
            .amber-text.text-darken-4
            {
                color: #ff6f00 !important;
            }
            
            .amber.accent-1
            {
                background-color: #ffe57f !important;
            }
            
            .amber-text.text-accent-1
            {
                color: #ffe57f !important;
            }
            
            .amber.accent-2
            {
                background-color: #ffd740 !important;
            }
            
            .amber-text.text-accent-2
            {
                color: #ffd740 !important;
            }
            
            .amber.accent-3
            {
                background-color: #ffc400 !important;
            }
            
            .amber-text.text-accent-3
            {
                color: #ffc400 !important;
            }
            
            .amber.accent-4
            {
                background-color: #ffab00 !important;
            }
            
            .amber-text.text-accent-4
            {
                color: #ffab00 !important;
            }
            
            .orange
            {
                background-color: #ff9800 !important;
            }
            
            .orange-text
            {
                color: #ff9800 !important;
            }
            
            .orange.lighten-5
            {
                background-color: #fff3e0 !important;
            }
            
            .orange-text.text-lighten-5
            {
                color: #fff3e0 !important;
            }
            
            .orange.lighten-4
            {
                background-color: #ffe0b2 !important;
            }
            
            .orange-text.text-lighten-4
            {
                color: #ffe0b2 !important;
            }
            
            .orange.lighten-3
            {
                background-color: #ffcc80 !important;
            }
            
            .orange-text.text-lighten-3
            {
                color: #ffcc80 !important;
            }
            
            .orange.lighten-2
            {
                background-color: #ffb74d !important;
            }
            
            .orange-text.text-lighten-2
            {
                color: #ffb74d !important;
            }
            
            .orange.lighten-1
            {
                background-color: #ffa726 !important;
            }
            
            .orange-text.text-lighten-1
            {
                color: #ffa726 !important;
            }
            
            .orange.darken-1
            {
                background-color: #fb8c00 !important;
            }
            
            .orange-text.text-darken-1
            {
                color: #fb8c00 !important;
            }
            
            .orange.darken-2
            {
                background-color: #f57c00 !important;
            }
            
            .orange-text.text-darken-2
            {
                color: #f57c00 !important;
            }
            
            .orange.darken-3
            {
                background-color: #ef6c00 !important;
            }
            
            .orange-text.text-darken-3
            {
                color: #ef6c00 !important;
            }
            
            .orange.darken-4
            {
                background-color: #e65100 !important;
            }
            
            .orange-text.text-darken-4
            {
                color: #e65100 !important;
            }
            
            .orange.accent-1
            {
                background-color: #ffd180 !important;
            }
            
            .orange-text.text-accent-1
            {
                color: #ffd180 !important;
            }
            
            .orange.accent-2
            {
                background-color: #ffab40 !important;
            }
            
            .orange-text.text-accent-2
            {
                color: #ffab40 !important;
            }
            
            .orange.accent-3
            {
                background-color: #ff9100 !important;
            }
            
            .orange-text.text-accent-3
            {
                color: #ff9100 !important;
            }
            
            .orange.accent-4
            {
                background-color: #ff6d00 !important;
            }
            
            .orange-text.text-accent-4
            {
                color: #ff6d00 !important;
            }
            
            .deep-orange
            {
                background-color: #ff5722 !important;
            }
            
            .deep-orange-text
            {
                color: #ff5722 !important;
            }
            
            .deep-orange.lighten-5
            {
                background-color: #fbe9e7 !important;
            }
            
            .deep-orange-text.text-lighten-5
            {
                color: #fbe9e7 !important;
            }
            
            .deep-orange.lighten-4
            {
                background-color: #ffccbc !important;
            }
            
            .deep-orange-text.text-lighten-4
            {
                color: #ffccbc !important;
            }
            
            .deep-orange.lighten-3
            {
                background-color: #ffab91 !important;
            }
            
            .deep-orange-text.text-lighten-3
            {
                color: #ffab91 !important;
            }
            
            .deep-orange.lighten-2
            {
                background-color: #ff8a65 !important;
            }
            
            .deep-orange-text.text-lighten-2
            {
                color: #ff8a65 !important;
            }
            
            .deep-orange.lighten-1
            {
                background-color: #ff7043 !important;
            }
            
            .deep-orange-text.text-lighten-1
            {
                color: #ff7043 !important;
            }
            
            .deep-orange.darken-1
            {
                background-color: #f4511e !important;
            }
            
            .deep-orange-text.text-darken-1
            {
                color: #f4511e !important;
            }
            
            .deep-orange.darken-2
            {
                background-color: #e64a19 !important;
            }
            
            .deep-orange-text.text-darken-2
            {
                color: #e64a19 !important;
            }
            
            .deep-orange.darken-3
            {
                background-color: #d84315 !important;
            }
            
            .deep-orange-text.text-darken-3
            {
                color: #d84315 !important;
            }
            
            .deep-orange.darken-4
            {
                background-color: #bf360c !important;
            }
            
            .deep-orange-text.text-darken-4
            {
                color: #bf360c !important;
            }
            
            .deep-orange.accent-1
            {
                background-color: #ff9e80 !important;
            }
            
            .deep-orange-text.text-accent-1
            {
                color: #ff9e80 !important;
            }
            
            .deep-orange.accent-2
            {
                background-color: #ff6e40 !important;
            }
            
            .deep-orange-text.text-accent-2
            {
                color: #ff6e40 !important;
            }
            
            .deep-orange.accent-3
            {
                background-color: #ff3d00 !important;
            }
            
            .deep-orange-text.text-accent-3
            {
                color: #ff3d00 !important;
            }
            
            .deep-orange.accent-4
            {
                background-color: #dd2c00 !important;
            }
            
            .deep-orange-text.text-accent-4
            {
                color: #dd2c00 !important;
            }
            
            .brown
            {
                background-color: #795548 !important;
            }
            
            .brown-text
            {
                color: #795548 !important;
            }
            
            .brown.lighten-5
            {
                background-color: #efebe9 !important;
            }
            
            .brown-text.text-lighten-5
            {
                color: #efebe9 !important;
            }
            
            .brown.lighten-4
            {
                background-color: #d7ccc8 !important;
            }
            
            .brown-text.text-lighten-4
            {
                color: #d7ccc8 !important;
            }
            
            .brown.lighten-3
            {
                background-color: #bcaaa4 !important;
            }
            
            .brown-text.text-lighten-3
            {
                color: #bcaaa4 !important;
            }
            
            .brown.lighten-2
            {
                background-color: #a1887f !important;
            }
            
            .brown-text.text-lighten-2
            {
                color: #a1887f !important;
            }
            
            .brown.lighten-1
            {
                background-color: #8d6e63 !important;
            }
            
            .brown-text.text-lighten-1
            {
                color: #8d6e63 !important;
            }
            
            .brown.darken-1
            {
                background-color: #6d4c41 !important;
            }
            
            .brown-text.text-darken-1
            {
                color: #6d4c41 !important;
            }
            
            .brown.darken-2
            {
                background-color: #5d4037 !important;
            }
            
            .brown-text.text-darken-2
            {
                color: #5d4037 !important;
            }
            
            .brown.darken-3
            {
                background-color: #4e342e !important;
            }
            
            .brown-text.text-darken-3
            {
                color: #4e342e !important;
            }
            
            .brown.darken-4
            {
                background-color: #3e2723 !important;
            }
            
            .brown-text.text-darken-4
            {
                color: #3e2723 !important;
            }
            
            .blue-grey
            {
                background-color: #607d8b !important;
            }
            
            .blue-grey-text
            {
                color: #607d8b !important;
            }
            
            .blue-grey.lighten-5
            {
                background-color: #eceff1 !important;
            }
            
            .blue-grey-text.text-lighten-5
            {
                color: #eceff1 !important;
            }
            
            .blue-grey.lighten-4
            {
                background-color: #cfd8dc !important;
            }
            
            .blue-grey-text.text-lighten-4
            {
                color: #cfd8dc !important;
            }
            
            .blue-grey.lighten-3
            {
                background-color: #b0bec5 !important;
            }
            
            .blue-grey-text.text-lighten-3
            {
                color: #b0bec5 !important;
            }
            
            .blue-grey.lighten-2
            {
                background-color: #90a4ae !important;
            }
            
            .blue-grey-text.text-lighten-2
            {
                color: #90a4ae !important;
            }
            
            .blue-grey.lighten-1
            {
                background-color: #78909c !important;
            }
            
            .blue-grey-text.text-lighten-1
            {
                color: #78909c !important;
            }
            
            .blue-grey.darken-1
            {
                background-color: #546e7a !important;
            }
            
            .blue-grey-text.text-darken-1
            {
                color: #546e7a !important;
            }
            
            .blue-grey.darken-2
            {
                background-color: #455a64 !important;
            }
            
            .blue-grey-text.text-darken-2
            {
                color: #455a64 !important;
            }
            
            .blue-grey.darken-3
            {
                background-color: #37474f !important;
            }
            
            .blue-grey-text.text-darken-3
            {
                color: #37474f !important;
            }
            
            .blue-grey.darken-4
            {
                background-color: #263238 !important;
            }
            
            .blue-grey-text.text-darken-4
            {
                color: #263238 !important;
            }
            
            .grey
            {
                background-color: #9e9e9e !important;
            }
            
            .grey-text
            {
                color: #9e9e9e !important;
            }
            
            .grey.lighten-5
            {
                background-color: #fafafa !important;
            }
            
            .grey-text.text-lighten-5
            {
                color: #fafafa !important;
            }
            
            .grey.lighten-4
            {
                background-color: #f5f5f5 !important;
            }
            
            .grey-text.text-lighten-4
            {
                color: #f5f5f5 !important;
            }
            
            .grey.lighten-3
            {
                background-color: #eee !important;
            }
            
            .grey-text.text-lighten-3
            {
                color: #eee !important;
            }
            
            .grey.lighten-2
            {
                background-color: #e0e0e0 !important;
            }
            
            .grey-text.text-lighten-2
            {
                color: #e0e0e0 !important;
            }
            
            .grey.lighten-1
            {
                background-color: #bdbdbd !important;
            }
            
            .grey-text.text-lighten-1
            {
                color: #bdbdbd !important;
            }
            
            .grey.darken-1
            {
                background-color: #757575 !important;
            }
            
            .grey-text.text-darken-1
            {
                color: #757575 !important;
            }
            
            .grey.darken-2
            {
                background-color: #616161 !important;
            }
            
            .grey-text.text-darken-2
            {
                color: #616161 !important;
            }
            
            .grey.darken-3
            {
                background-color: #424242 !important;
            }
            
            .grey-text.text-darken-3
            {
                color: #424242 !important;
            }
            
            .grey.darken-4
            {
                background-color: #212121 !important;
            }
            
            .grey-text.text-darken-4
            {
                color: #212121 !important;
            }
            
            .black
            {
                background-color: #000 !important;
            }
            
            .black-text
            {
                color: #000 !important;
            }
            
            .white
            {
                background-color: #fff !important;
            }
            
            .white-text
            {
                color: #fff !important;
            }
            
            .transparent
            {
                background-color: transparent !important;
            }
            
            .transparent-text
            {
                color: transparent !important;
            }
            
            /*
              Autogenerated theme file
            */
            /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
            /* Document
               ========================================================================== */
            /**
             * 1. Correct the line height in all browsers.
             * 2. Prevent adjustments of font size after orientation changes in
             *    IE on Windows Phone and in iOS.
             */
            html
            {
                line-height: 1.15;
                /* 1 */
            
                    -ms-text-size-adjust: 100%;
                /* 2 */
                -webkit-text-size-adjust: 100%;
                /* 2 */
            }
            
            /* Sections
               ========================================================================== */
            /**
             * Remove the margin in all browsers (opinionated).
             */
            body
            {
                margin: 0;
            }
            
            /**
             * Add the correct display in IE 9-.
             */
            article,
            aside,
            footer,
            header,
            nav,
            section
            {
                display: block;
            }
            
            /**
             * Correct the font size and margin on \`h1\` elements within \`section\` and
             * \`article\` contexts in Chrome, Firefox, and Safari.
             */
            h1
            {
                font-size: 2em;
            
                margin: .67em 0;
            }
            
            /* Grouping content
               ========================================================================== */
            /**
             * Add the correct display in IE 9-.
             * 1. Add the correct display in IE.
             */
            figcaption,
            figure,
            main
            {
                /* 1 */
                display: block;
            }
            
            /**
             * Add the correct margin in IE 8.
             */
            figure
            {
                margin: 1em 40px;
            }
            
            /**
             * 1. Add the correct box sizing in Firefox.
             * 2. Show the overflow in Edge and IE.
             */
            hr
            {
                /* 1 */
                overflow: visible;
            
                -webkit-box-sizing: content-box;
                   -moz-box-sizing: content-box;
                        box-sizing: content-box;
                /* 1 */
                height: 0;
                /* 2 */
            }
            
            /**
             * 1. Correct the inheritance and scaling of font size in all browsers.
             * 2. Correct the odd \`em\` font sizing in all browsers.
             */
            pre
            {
                font-family: monospace, monospace;
                /* 1 */
                font-size: 1em;
                /* 2 */
            }
            
            /* Text-level semantics
               ========================================================================== */
            /**
             * 1. Remove the gray background on active links in IE 10.
             * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
             */
            a
            {
                background-color: transparent;
                /* 1 */
            
                -webkit-text-decoration-skip: objects;
                /* 2 */
            }
            
            /**
             * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
             * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
             */
            abbr[title]
            {
                /* 1 */
                        text-decoration: underline;
                        text-decoration: underline dotted;
            
                border-bottom: none;
                /* 2 */
            
                -webkit-text-decoration: underline dotted;
                   -moz-text-decoration: underline dotted;
                /* 2 */
            }
            
            /**
             * Prevent the duplicate application of \`bolder\` by the next rule in Safari 6.
             */
            b,
            strong
            {
                font-weight: inherit;
            }
            
            /**
             * Add the correct font weight in Chrome, Edge, and Safari.
             */
            b,
            strong
            {
                font-weight: bolder;
            }
            
            /**
             * 1. Correct the inheritance and scaling of font size in all browsers.
             * 2. Correct the odd \`em\` font sizing in all browsers.
             */
            code,
            kbd,
            samp
            {
                font-family: monospace, monospace;
                /* 1 */
                font-size: 1em;
                /* 2 */
            }
            
            /**
             * Add the correct font style in Android 4.3-.
             */
            dfn
            {
                font-style: italic;
            }
            
            /**
             * Add the correct background and color in IE 9-.
             */
            mark
            {
                color: #000;
                background-color: #ff0;
            }
            
            /**
             * Add the correct font size in all browsers.
             */
            small
            {
                font-size: 80%;
            }
            
            /**
             * Prevent \`sub\` and \`sup\` elements from affecting the line height in
             * all browsers.
             */
            sub,
            sup
            {
                font-size: 75%;
                line-height: 0;
            
                position: relative;
            
                vertical-align: baseline;
            }
            
            sub
            {
                bottom: -.25em;
            }
            
            sup
            {
                top: -.5em;
            }
            
            /* Embedded content
               ========================================================================== */
            /**
             * Add the correct display in IE 9-.
             */
            audio,
            video
            {
                display: inline-block;
            }
            
            /**
             * Add the correct display in iOS 4-7.
             */
            audio:not([controls])
            {
                display: none;
            
                height: 0;
            }
            
            /**
             * Remove the border on images inside links in IE 10-.
             */
            img
            {
                border-style: none;
            }
            
            /**
             * Hide the overflow in IE.
             */
            svg:not(:root)
            {
                overflow: hidden;
            }
            
            /* Forms
               ========================================================================== */
            /**
             * 1. Change the font styles in all browsers (opinionated).
             * 2. Remove the margin in Firefox and Safari.
             */
            button,
            input,
            optgroup,
            select,
            textarea
            {
                font-family: sans-serif;
                /* 1 */
                font-size: 100%;
                /* 1 */
                line-height: 1.15;
                /* 1 */
            
                margin: 0;
                /* 2 */
            }
            
            /**
             * Show the overflow in IE.
             * 1. Show the overflow in Edge.
             */
            button,
            input
            {
                /* 1 */
                overflow: visible;
            }
            
            /**
             * Remove the inheritance of text transform in Edge, Firefox, and IE.
             * 1. Remove the inheritance of text transform in Firefox.
             */
            button,
            select
            {
                /* 1 */
                text-transform: none;
            }
            
            /**
             * 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
             *    controls in Android 4.
             * 2. Correct the inability to style clickable types in iOS and Safari.
             */
            button,
            html [type='button'],
            [type='reset'],
            [type='submit']
            {
                -webkit-appearance: button;
                /* 2 */
            }
            
            /**
             * Remove the inner border and padding in Firefox.
             */
            button::-moz-focus-inner,
            [type='button']::-moz-focus-inner,
            [type='reset']::-moz-focus-inner,
            [type='submit']::-moz-focus-inner
            {
                padding: 0;
            
                border-style: none;
            }
            
            /**
             * Restore the focus styles unset by the previous rule.
             */
            button:-moz-focusring,
            [type='button']:-moz-focusring,
            [type='reset']:-moz-focusring,
            [type='submit']:-moz-focusring
            {
                outline: 1px dotted ButtonText;
            }
            
            /**
             * Correct the padding in Firefox.
             */
            fieldset
            {
                padding: .35em .75em .625em;
            }
            
            /**
             * 1. Correct the text wrapping in Edge and IE.
             * 2. Correct the color inheritance from \`fieldset\` elements in IE.
             * 3. Remove the padding so developers are not caught out when they zero out
             *    \`fieldset\` elements in all browsers.
             */
            legend
            {
                /* 2 */
                display: table;
            
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                /* 1 */
                max-width: 100%;
                /* 1 */
                padding: 0;
                /* 3 */
            
                white-space: normal;
                /* 1 */
            
                color: inherit;
                /* 1 */
            }
            
            /**
             * 1. Add the correct display in IE 9-.
             * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
             */
            progress
            {
                display: inline-block;
                /* 1 */
            
                vertical-align: baseline;
                /* 2 */
            }
            
            /**
             * Remove the default vertical scrollbar in IE.
             */
            textarea
            {
                overflow: auto;
            }
            
            /**
             * 1. Add the correct box sizing in IE 10-.
             * 2. Remove the padding in IE 10-.
             */
            [type='checkbox'],
            [type='radio']
            {
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                /* 1 */
                padding: 0;
                /* 2 */
            }
            
            /**
             * Correct the cursor style of increment and decrement buttons in Chrome.
             */
            [type='number']::-webkit-inner-spin-button,
            [type='number']::-webkit-outer-spin-button
            {
                height: auto;
            }
            
            /**
             * 1. Correct the odd appearance in Chrome and Safari.
             * 2. Correct the outline style in Safari.
             */
            [type='search']
            {
                /* 1 */
                outline-offset: -2px;
            
                -webkit-appearance: textfield;
                /* 2 */
            }
            
            /**
             * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
             */
            [type='search']::-webkit-search-cancel-button,
            [type='search']::-webkit-search-decoration
            {
                -webkit-appearance: none;
            }
            
            /**
             * 1. Correct the inability to style clickable types in iOS and Safari.
             * 2. Change font properties to \`inherit\` in Safari.
             */
            ::-webkit-file-upload-button
            {
                /* 1 */
                font: inherit;
            
                -webkit-appearance: button;
                /* 2 */
            }
            
            /* Interactive
               ========================================================================== */
            /*
             * Add the correct display in IE 9-.
             * 1. Add the correct display in Edge, IE, and Firefox.
             */
            details,
            menu
            {
                display: block;
            }
            
            /*
             * Add the correct display in all browsers.
             */
            summary
            {
                display: list-item;
            }
            
            /* Scripting
               ========================================================================== */
            /**
             * Add the correct display in IE 9-.
             */
            canvas
            {
                display: inline-block;
            }
            
            /**
             * Add the correct display in IE.
             */
            template
            {
                display: none;
            }
            
            /* Hidden
               ========================================================================== */
            /**
             * Add the correct display in IE 10-.
             */
            [hidden]
            {
                display: none;
            }
            
            html
            {
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
            }
            
            *,
            *:before,
            *:after
            {
                -webkit-box-sizing: inherit;
                   -moz-box-sizing: inherit;
                        box-sizing: inherit;
            }
            
            button,
            input,
            optgroup,
            select,
            textarea
            {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            }
            
            ul:not(.browser-default)
            {
                padding-left: 0;
            
                list-style-type: none;
            }
            ul:not(.browser-default) > li
            {
                list-style-type: none;
            }
            
            a
            {
                text-decoration: none;
                color: #8e24aa;
                -webkit-tap-highlight-color: transparent;
            }
            
            :focus
            {
                outline: none;
            }
            
            .valign-wrapper
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                -webkit-box-align: center;
                -webkit-align-items: center;
                   -moz-box-align: center;
                -ms-flex-align: center;
                        align-items: center;
            }
            
            .clearfix
            {
                clear: both;
            }
            
            .z-depth-0
            {
                -webkit-box-shadow: none !important;
                        box-shadow: none !important;
            }
            
            /* 2dp elevation modified*/
            .z-depth-1,
            nav,
            .card-panel,
            .card,
            .toast,
            .btn,
            .btn-large,
            .btn-small,
            .btn-floating,
            .dropdown-content,
            .sidenav
            {
                -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2);
                        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2);
            }
            
            .z-depth-1-half,
            .btn:hover,
            .btn-large:hover,
            .btn-small:hover,
            .btn-floating:hover
            {
                -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
                        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .14), 0 1px 7px 0 rgba(0, 0, 0, .12), 0 3px 1px -1px rgba(0, 0, 0, .2);
            }
            
            /* 6dp elevation modified*/
            .z-depth-2
            {
                -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .3);
                        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .3);
            }
            
            /* 12dp elevation modified*/
            .z-depth-3
            {
                -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
                        box-shadow: 0 8px 17px 2px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
            }
            
            /* 16dp elevation */
            .z-depth-4
            {
                -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -7px rgba(0, 0, 0, .2);
                        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -7px rgba(0, 0, 0, .2);
            }
            
            /* 24dp elevation */
            .z-depth-5,
            .modal
            {
                -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px -7px rgba(0, 0, 0, .2);
                        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px -7px rgba(0, 0, 0, .2);
            }
            
            .hoverable
            {
                -webkit-transition: -webkit-box-shadow .25s;
                   -moz-transition:         box-shadow .25s;
                     -o-transition:         box-shadow .25s;
                        transition: -webkit-box-shadow .25s;
                        transition:         box-shadow .25s;
                        transition:         box-shadow .25s, -webkit-box-shadow .25s;
            }
            .hoverable:hover
            {
                -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
                        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
            }
            
            .divider
            {
                overflow: hidden;
            
                height: 1px;
            
                background-color: #e0e0e0;
            }
            
            blockquote
            {
                margin: 20px 0;
                padding-left: 1.5rem;
            
                border-left: 5px solid #9c27b0;
            }
            
            i
            {
                line-height: inherit;
            }
            i.left
            {
                float: left;
            
                margin-right: 15px;
            }
            i.right
            {
                float: right;
            
                margin-left: 15px;
            }
            i.tiny
            {
                font-size: 1rem;
            }
            i.small
            {
                font-size: 2rem;
            }
            i.medium
            {
                font-size: 4rem;
            }
            i.large
            {
                font-size: 6rem;
            }
            
            img.responsive-img,
            video.responsive-video
            {
                max-width: 100%;
                height: auto;
            }
            
            .pagination li
            {
                display: inline-block;
            
                height: 30px;
            
                text-align: center;
                vertical-align: top;
            
                border-radius: 2px;
            }
            .pagination li a
            {
                font-size: 1.2rem;
                line-height: 30px;
            
                display: inline-block;
            
                padding: 0 10px;
            
                color: #444;
            }
            .pagination li.active a
            {
                color: #fff;
            }
            .pagination li.active
            {
                background-color: #9c27b0;
            }
            .pagination li.disabled a
            {
                cursor: default;
            
                color: #999;
            }
            .pagination li i
            {
                font-size: 2rem;
            }
            
            .pagination li.pages ul li
            {
                display: inline-block;
                float: none;
            }
            
            @media only screen and (max-width: 992px)
            {
                .pagination
                {
                    width: 100%;
                }
                .pagination li.prev,
                .pagination li.next
                {
                    width: 10%;
                }
                .pagination li.pages
                {
                    overflow: hidden;
            
                    width: 80%;
            
                    white-space: nowrap;
                }
            }
            
            .breadcrumb
            {
                font-size: 18px;
            
                color: rgba(255, 255, 255, .7);
            }
            .breadcrumb i,
            .breadcrumb [class^='mdi-'],
            .breadcrumb [class*='mdi-'],
            .breadcrumb i.material-icons
            {
                font-size: 24px;
            
                display: inline-block;
                float: left;
            }
            .breadcrumb:before
            {
                font-family: 'Material Icons';
                font-size: 25px;
                font-weight: normal;
                font-style: normal;
            
                display: inline-block;
            
                margin: 0 10px 0 8px;
            
                content: '\\E5CC';
                vertical-align: top;
            
                color: rgba(255, 255, 255, .7);
            
                -webkit-font-smoothing: antialiased;
            }
            .breadcrumb:first-child:before
            {
                display: none;
            }
            .breadcrumb:last-child
            {
                color: #fff;
            }
            
            .parallax-container
            {
                position: relative;
            
                overflow: hidden;
            
                height: 500px;
            }
            .parallax-container .parallax
            {
                position: absolute;
                z-index: -1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            .parallax-container .parallax img
            {
                position: absolute;
                bottom: 0;
                left: 50%;
            
                min-width: 100%;
                min-height: 100%;
            
                -webkit-transform: translate3d(0, 0, 0);
                -webkit-transform: translateX(-50%);
                   -moz-transform: translate3d(0, 0, 0);
                   -moz-transform: translateX(-50%);
                    -ms-transform: translateX(-50%);
                     -o-transform: translateX(-50%);
                        transform: translate3d(0, 0, 0);
                        transform: translateX(-50%);
            
                opacity: 0;
            }
            
            .pin-top,
            .pin-bottom
            {
                position: relative;
            }
            
            .pinned
            {
                position: fixed !important;
            }
            
            /*********************
              Transition Classes
            **********************/
            ul.staggered-list li
            {
                opacity: 0;
            }
            
            .fade-in
            {
                -webkit-transform-origin: 0 50%;
                   -moz-transform-origin: 0 50%;
                    -ms-transform-origin: 0 50%;
                     -o-transform-origin: 0 50%;
                        transform-origin: 0 50%;
            
                opacity: 0;
            }
            
            /*********************
              Media Query Classes
            **********************/
            @media only screen and (max-width: 600px)
            {
                .hide-on-small-only,
                .hide-on-small-and-down
                {
                    display: none !important;
                }
            }
            
            @media only screen and (max-width: 992px)
            {
                .hide-on-med-and-down
                {
                    display: none !important;
                }
            }
            
            @media only screen and (min-width: 601px)
            {
                .hide-on-med-and-up
                {
                    display: none !important;
                }
            }
            
            @media only screen and (min-width: 600px) and (max-width: 992px)
            {
                .hide-on-med-only
                {
                    display: none !important;
                }
            }
            
            @media only screen and (min-width: 993px)
            {
                .hide-on-large-only
                {
                    display: none !important;
                }
            }
            
            @media only screen and (min-width: 1201px)
            {
                .hide-on-extra-large-only
                {
                    display: none !important;
                }
            }
            
            @media only screen and (min-width: 1201px)
            {
                .show-on-extra-large
                {
                    display: block !important;
                }
            }
            
            @media only screen and (min-width: 993px)
            {
                .show-on-large
                {
                    display: block !important;
                }
            }
            
            @media only screen and (min-width: 600px) and (max-width: 992px)
            {
                .show-on-medium
                {
                    display: block !important;
                }
            }
            
            @media only screen and (max-width: 600px)
            {
                .show-on-small
                {
                    display: block !important;
                }
            }
            
            @media only screen and (min-width: 601px)
            {
                .show-on-medium-and-up
                {
                    display: block !important;
                }
            }
            
            @media only screen and (max-width: 992px)
            {
                .show-on-medium-and-down
                {
                    display: block !important;
                }
            }
            
            @media only screen and (max-width: 600px)
            {
                .center-on-small-only
                {
                    text-align: center;
                }
            }
            
            .page-footer
            {
                padding-top: 20px;
            
                color: #fff;
                background-color: #9c27b0;
            }
            .page-footer .footer-copyright
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
                overflow: hidden;
            
                min-height: 50px;
                padding: 10px 0;
            
                color: rgba(255, 255, 255, .8);
                background-color: rgba(51, 51, 51, .08);
            
                -webkit-box-align: center;
                -webkit-align-items: center;
                   -moz-box-align: center;
                -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                -ms-flex-pack: justify;
                        justify-content: space-between;
            }
            
            table,
            th,
            td
            {
                border: none;
                font-size:12px;
            }
            
            table
            {
                display: table;
            
                width: 100%;
            
                border-spacing: 0;
                border-collapse: collapse;
            }
            table.striped tr
            {
                border-bottom: none;
            }
            table.striped > tbody > tr:nth-child(odd)
            {
                background-color: rgba(242, 242, 242, .5);
            }
            table.striped > tbody > tr > td
            {
                border-radius: 0;
            }
            table.highlight > tbody > tr
            {
                -webkit-transition: background-color .25s ease;
                   -moz-transition: background-color .25s ease;
                     -o-transition: background-color .25s ease;
                        transition: background-color .25s ease;
            }
            table.highlight > tbody > tr:hover
            {
                background-color: rgba(242, 242, 242, .5);
            }
            table.centered thead tr th,
            table.centered tbody tr td
            {
                text-align: center;
            }
            
            tr
            {
                border-bottom: 1px solid rgba(0, 0, 0, .12);
            }
            
            td,
            th
            {
                display: table-cell;
            
                padding: 15px 5px;
            
                text-align: left;
                vertical-align: middle;
            
                border-radius: 2px;
            }
            
            @media only screen and (max-width: 992px)
            {
                table.responsive-table
                {
                    position: relative;
            
                    display: block;
            
                    width: 100%;
            
                    border-spacing: 0;
                    border-collapse: collapse;
                    /* sort out borders */
                }
                table.responsive-table td:empty:before
                {
                    content: '\\00a0';
                }
                table.responsive-table th,
                table.responsive-table td
                {
                    margin: 0;
            
                    vertical-align: top;
                }
                table.responsive-table th
                {
                    text-align: left;
                }
                table.responsive-table thead
                {
                    display: block;
                    float: left;
                }
                table.responsive-table thead tr
                {
                    display: block;
            
                    padding: 0 10px 0 0;
                }
                table.responsive-table thead tr th::before
                {
                    content: '\\00a0';
                }
                table.responsive-table tbody
                {
                    position: relative;
            
                    display: block;
                    overflow-x: auto;
            
                    width: auto;
            
                    white-space: nowrap;
                }
                table.responsive-table tbody tr
                {
                    display: inline-block;
            
                    vertical-align: top;
                }
                table.responsive-table th
                {
                    display: block;
            
                    text-align: right;
                }
                table.responsive-table td
                {
                    display: block;
            
                    min-height: 1.25em;
            
                    text-align: left;
                }
                table.responsive-table tr
                {
                    padding: 0 10px;
            
                    border-bottom: none;
                }
                table.responsive-table thead
                {
                    border: 0;
                    border-right: 1px solid rgba(0, 0, 0, .12);
                }
            }
            
            .collection
            {
                position: relative;
            
                overflow: hidden;
            
                margin: .5rem 0 1rem 0;
            
                border: 1px solid #e0e0e0;
                border-radius: 2px;
            }
            .collection .collection-item
            {
                line-height: 1.5rem;
            
                margin: 0;
                padding: 10px 20px;
            
                border-bottom: 1px solid #e0e0e0;
                background-color: #fff;
            }
            .collection .collection-item.avatar
            {
                position: relative;
            
                min-height: 84px;
                padding-left: 72px;
            }
            .collection .collection-item.avatar:not(.circle-clipper) > .circle,
            .collection .collection-item.avatar :not(.circle-clipper) > .circle
            {
                position: absolute;
                left: 15px;
            
                display: inline-block;
                overflow: hidden;
            
                width: 42px;
                height: 42px;
            
                vertical-align: middle;
            }
            .collection .collection-item.avatar i.circle
            {
                font-size: 18px;
                line-height: 42px;
            
                text-align: center;
            
                color: #fff;
                background-color: #999;
            }
            .collection .collection-item.avatar .title
            {
                font-size: 16px;
            }
            .collection .collection-item.avatar p
            {
                margin: 0;
            }
            .collection .collection-item.avatar .secondary-content
            {
                position: absolute;
                top: 16px;
                right: 16px;
            }
            .collection .collection-item:last-child
            {
                border-bottom: none;
            }
            .collection .collection-item.active
            {
                color: #eefdff;
                background-color: #00bcd4;
            }
            .collection .collection-item.active .secondary-content
            {
                color: #fff;
            }
            .collection a.collection-item
            {
                display: block;
            
                -webkit-transition: .25s;
                   -moz-transition: .25s;
                     -o-transition: .25s;
                        transition: .25s;
            
                color: #00bcd4;
            }
            .collection a.collection-item:not(.active):hover
            {
                background-color: #ddd;
            }
            .collection.with-header .collection-header
            {
                padding: 10px 20px;
            
                border-bottom: 1px solid #e0e0e0;
                background-color: #fff;
            }
            .collection.with-header .collection-item
            {
                padding-left: 30px;
            }
            .collection.with-header .collection-item.avatar
            {
                padding-left: 72px;
            }
            
            .secondary-content
            {
                float: right;
            
                color: #00bcd4;
            }
            
            .collapsible .collection
            {
                margin: 0;
            
                border: none;
            }
            
            .video-container
            {
                position: relative;
            
                overflow: hidden;
            
                height: 0;
                padding-bottom: 56.25%;
            }
            .video-container iframe,
            .video-container object,
            .video-container embed
            {
                position: absolute;
                top: 0;
                left: 0;
            
                width: 100%;
                height: 100%;
            }
            
            .progress
            {
                position: relative;
            
                display: block;
                overflow: hidden;
            
                width: 100%;
                height: 4px;
                margin: .5rem 0 1rem 0;
            
                border-radius: 2px;
                background-color: #a1f4ff;
            }
            .progress .determinate
            {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
            
                -webkit-transition: width .3s linear;
                   -moz-transition: width .3s linear;
                     -o-transition: width .3s linear;
                        transition: width .3s linear;
            
                background-color: #00bcd4;
            }
            .progress .indeterminate
            {
                background-color: #00bcd4;
            }
            .progress .indeterminate:before
            {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
            
                content: '';
                -webkit-animation: indeterminate 2.1s cubic-bezier(.65, .815, .735, .395) infinite;
                   -moz-animation: indeterminate 2.1s cubic-bezier(.65, .815, .735, .395) infinite;
                     -o-animation: indeterminate 2.1s cubic-bezier(.65, .815, .735, .395) infinite;
                        animation: indeterminate 2.1s cubic-bezier(.65, .815, .735, .395) infinite;
            
                background-color: inherit;
            
                will-change: left, right;
            }
            .progress .indeterminate:after
            {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
            
                content: '';
                -webkit-animation: indeterminate-short 2.1s cubic-bezier(.165, .84, .44, 1) infinite;
                   -moz-animation: indeterminate-short 2.1s cubic-bezier(.165, .84, .44, 1) infinite;
                     -o-animation: indeterminate-short 2.1s cubic-bezier(.165, .84, .44, 1) infinite;
                        animation: indeterminate-short 2.1s cubic-bezier(.165, .84, .44, 1) infinite;
                -webkit-animation-delay: 1.15s;
                   -moz-animation-delay: 1.15s;
                     -o-animation-delay: 1.15s;
                        animation-delay: 1.15s;
            
                background-color: inherit;
            
                will-change: left, right;
            }
            
            @-webkit-keyframes indeterminate
            {
                0%
                {
                    right: 100%;
                    left: -35%;
                }
                60%
                {
                    right: -90%;
                    left: 100%;
                }
                100%
                {
                    right: -90%;
                    left: 100%;
                }
            }
            
            @-moz-keyframes indeterminate
            {
                0%
                {
                    right: 100%;
                    left: -35%;
                }
                60%
                {
                    right: -90%;
                    left: 100%;
                }
                100%
                {
                    right: -90%;
                    left: 100%;
                }
            }
            
            @-o-keyframes indeterminate
            {
                0%
                {
                    right: 100%;
                    left: -35%;
                }
                60%
                {
                    right: -90%;
                    left: 100%;
                }
                100%
                {
                    right: -90%;
                    left: 100%;
                }
            }
            
            @keyframes indeterminate
            {
                0%
                {
                    right: 100%;
                    left: -35%;
                }
                60%
                {
                    right: -90%;
                    left: 100%;
                }
                100%
                {
                    right: -90%;
                    left: 100%;
                }
            }
            
            @-webkit-keyframes indeterminate-short
            {
                0%
                {
                    right: 100%;
                    left: -200%;
                }
                60%
                {
                    right: -8%;
                    left: 107%;
                }
                100%
                {
                    right: -8%;
                    left: 107%;
                }
            }
            
            @-moz-keyframes indeterminate-short
            {
                0%
                {
                    right: 100%;
                    left: -200%;
                }
                60%
                {
                    right: -8%;
                    left: 107%;
                }
                100%
                {
                    right: -8%;
                    left: 107%;
                }
            }
            
            @-o-keyframes indeterminate-short
            {
                0%
                {
                    right: 100%;
                    left: -200%;
                }
                60%
                {
                    right: -8%;
                    left: 107%;
                }
                100%
                {
                    right: -8%;
                    left: 107%;
                }
            }
            
            @keyframes indeterminate-short
            {
                0%
                {
                    right: 100%;
                    left: -200%;
                }
                60%
                {
                    right: -8%;
                    left: 107%;
                }
                100%
                {
                    right: -8%;
                    left: 107%;
                }
            }
            
            /*******************
              Utility Classes
            *******************/
            .hide
            {
                display: none !important;
            }
            
            .left-align
            {
                text-align: left;
            }
            
            .right-align
            {
                text-align: right;
            }
            
            .center,
            .center-align
            {
                text-align: center;
            }
            
            .left
            {
                float: left !important;
            }
            
            .right
            {
                float: right !important;
            }
            
            .no-select,
            input[type=range],
            input[type=range] + .thumb
            {
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            }
            
            .circle
            {
                border-radius: 50%;
            }
            
            .center-block
            {
                display: block;
            
                margin-right: auto;
                margin-left: auto;
            }
            
            .truncate
            {
                display: block;
                overflow: hidden;
            
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            
            .no-padding
            {
                padding: 0 !important;
            }
            
            span.badge
            {
                font-size: 1rem;
                line-height: 22px;
            
                float: right;
            
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                min-width: 3rem;
                height: 22px;
                margin-left: 14px;
                padding: 0 6px;
            
                text-align: center;
            
                color: #757575;
            }
            span.badge.new
            {
                font-size: .8rem;
                font-weight: 300;
            
                color: #fff;
                border-radius: 2px;
                background-color: #00bcd4;
            }
            span.badge.new:after
            {
                content: ' new';
            }
            span.badge[data-badge-caption]::after
            {
                content: ' ' attr(data-badge-caption);
            }
            
            nav ul a span.badge
            {
                line-height: 22px;
            
                display: inline-block;
                float: none;
            
                height: 22px;
                margin-left: 4px;
            
                -webkit-font-smoothing: auto;
            }
            
            .collection-item span.badge
            {
                margin-top: -webkit-calc(.75rem - 11px);
                margin-top:    -moz-calc(.75rem - 11px);
                margin-top:         calc(.75rem - 11px);
            }
            
            .collapsible span.badge
            {
                margin-left: auto;
            }
            
            .sidenav span.badge
            {
                margin-top: -webkit-calc(24px - 11px);
                margin-top:    -moz-calc(24px - 11px);
                margin-top:         calc(24px - 11px);
            }
            
            table span.badge
            {
                display: inline-block;
                float: none;
            
                margin-left: auto;
            }
            
            /* This is needed for some mobile phones to display the Google Icon font properly */
            .material-icons
            {
                text-rendering: optimizeLegibility;
                -webkit-font-feature-settings: 'liga';
                   -moz-font-feature-settings: 'liga';
                        font-feature-settings: 'liga';
            }
            
            .container
            {
                width: 90%;
                max-width: 1280px;
                margin: 0 auto;
            }
            
            @media only screen and (min-width: 601px)
            {
                .container
                {
                    width: 85%;
                }
            }
            
            @media only screen and (min-width: 993px)
            {
                .container
                {
                    width: 70%;
                }
            }
            
            .col .row
            {
                margin-right: -.75rem;
                margin-left: -.75rem;
            }
            
            .section
            {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            .section.no-pad
            {
                padding: 0;
            }
            .section.no-pad-bot
            {
                padding-bottom: 0;
            }
            .section.no-pad-top
            {
                padding-top: 0;
            }
            
            .row
            {
                margin-right: auto;
                margin-bottom: 20px;
                margin-left: auto;
            }
            .row:after
            {
                display: table;
                clear: both;
            
                content: '';
            }
            .row .col
            {
                float: left;
            
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                min-height: 1px;
                padding: 0 .75rem;
            }
            .row .col[class*='push-'],
            .row .col[class*='pull-']
            {
                position: relative;
            }
            .row .col.s1
            {
                right: auto;
                left: auto;
            
                width: 8.33333%;
                margin-left: auto;
            }
            .row .col.s2
            {
                right: auto;
                left: auto;
            
                width: 16.66667%;
                margin-left: auto;
            }
            .row .col.s3
            {
                right: auto;
                left: auto;
            
                width: 25%;
                margin-left: auto;
            }
            .row .col.s4
            {
                right: auto;
                left: auto;
            
                width: 33.33333%;
                margin-left: auto;
            }
            .row .col.s5
            {
                right: auto;
                left: auto;
            
                width: 41.66667%;
                margin-left: auto;
            }
            .row .col.s6
            {
                right: auto;
                left: auto;
            
                width: 50%;
                margin-left: auto;
            }
            .row .col.s7
            {
                right: auto;
                left: auto;
            
                width: 58.33333%;
                margin-left: auto;
            }
            .row .col.s8
            {
                right: auto;
                left: auto;
            
                width: 66.66667%;
                margin-left: auto;
            }
            .row .col.s9
            {
                right: auto;
                left: auto;
            
                width: 75%;
                margin-left: auto;
            }
            .row .col.s10
            {
                right: auto;
                left: auto;
            
                width: 83.33333%;
                margin-left: auto;
            }
            .row .col.s11
            {
                right: auto;
                left: auto;
            
                width: 91.66667%;
                margin-left: auto;
            }
            .row .col.s12
            {
                right: auto;
                left: auto;
            
                width: 100%;
                margin-left: auto;
            }
            .row .col.offset-s1
            {
                margin-left: 8.33333%;
            }
            .row .col.pull-s1
            {
                right: 8.33333%;
            }
            .row .col.push-s1
            {
                left: 8.33333%;
            }
            .row .col.offset-s2
            {
                margin-left: 16.66667%;
            }
            .row .col.pull-s2
            {
                right: 16.66667%;
            }
            .row .col.push-s2
            {
                left: 16.66667%;
            }
            .row .col.offset-s3
            {
                margin-left: 25%;
            }
            .row .col.pull-s3
            {
                right: 25%;
            }
            .row .col.push-s3
            {
                left: 25%;
            }
            .row .col.offset-s4
            {
                margin-left: 33.33333%;
            }
            .row .col.pull-s4
            {
                right: 33.33333%;
            }
            .row .col.push-s4
            {
                left: 33.33333%;
            }
            .row .col.offset-s5
            {
                margin-left: 41.66667%;
            }
            .row .col.pull-s5
            {
                right: 41.66667%;
            }
            .row .col.push-s5
            {
                left: 41.66667%;
            }
            .row .col.offset-s6
            {
                margin-left: 50%;
            }
            .row .col.pull-s6
            {
                right: 50%;
            }
            .row .col.push-s6
            {
                left: 50%;
            }
            .row .col.offset-s7
            {
                margin-left: 58.33333%;
            }
            .row .col.pull-s7
            {
                right: 58.33333%;
            }
            .row .col.push-s7
            {
                left: 58.33333%;
            }
            .row .col.offset-s8
            {
                margin-left: 66.66667%;
            }
            .row .col.pull-s8
            {
                right: 66.66667%;
            }
            .row .col.push-s8
            {
                left: 66.66667%;
            }
            .row .col.offset-s9
            {
                margin-left: 75%;
            }
            .row .col.pull-s9
            {
                right: 75%;
            }
            .row .col.push-s9
            {
                left: 75%;
            }
            .row .col.offset-s10
            {
                margin-left: 83.33333%;
            }
            .row .col.pull-s10
            {
                right: 83.33333%;
            }
            .row .col.push-s10
            {
                left: 83.33333%;
            }
            .row .col.offset-s11
            {
                margin-left: 91.66667%;
            }
            .row .col.pull-s11
            {
                right: 91.66667%;
            }
            .row .col.push-s11
            {
                left: 91.66667%;
            }
            .row .col.offset-s12
            {
                margin-left: 100%;
            }
            .row .col.pull-s12
            {
                right: 100%;
            }
            .row .col.push-s12
            {
                left: 100%;
            }
            @media only screen and (min-width: 601px)
            {
                .row .col.m1
                {
                    right: auto;
                    left: auto;
            
                    width: 8.33333%;
                    margin-left: auto;
                }
                .row .col.m2
                {
                    right: auto;
                    left: auto;
            
                    width: 16.66667%;
                    margin-left: auto;
                }
                .row .col.m3
                {
                    right: auto;
                    left: auto;
            
                    width: 25%;
                    margin-left: auto;
                }
                .row .col.m4
                {
                    right: auto;
                    left: auto;
            
                    width: 33.33333%;
                    margin-left: auto;
                }
                .row .col.m5
                {
                    right: auto;
                    left: auto;
            
                    width: 41.66667%;
                    margin-left: auto;
                }
                .row .col.m6
                {
                    right: auto;
                    left: auto;
            
                    width: 50%;
                    margin-left: auto;
                }
                .row .col.m7
                {
                    right: auto;
                    left: auto;
            
                    width: 58.33333%;
                    margin-left: auto;
                }
                .row .col.m8
                {
                    right: auto;
                    left: auto;
            
                    width: 66.66667%;
                    margin-left: auto;
                }
                .row .col.m9
                {
                    right: auto;
                    left: auto;
            
                    width: 75%;
                    margin-left: auto;
                }
                .row .col.m10
                {
                    right: auto;
                    left: auto;
            
                    width: 83.33333%;
                    margin-left: auto;
                }
                .row .col.m11
                {
                    right: auto;
                    left: auto;
            
                    width: 91.66667%;
                    margin-left: auto;
                }
                .row .col.m12
                {
                    right: auto;
                    left: auto;
            
                    width: 100%;
                    margin-left: auto;
                }
                .row .col.offset-m1
                {
                    margin-left: 8.33333%;
                }
                .row .col.pull-m1
                {
                    right: 8.33333%;
                }
                .row .col.push-m1
                {
                    left: 8.33333%;
                }
                .row .col.offset-m2
                {
                    margin-left: 16.66667%;
                }
                .row .col.pull-m2
                {
                    right: 16.66667%;
                }
                .row .col.push-m2
                {
                    left: 16.66667%;
                }
                .row .col.offset-m3
                {
                    margin-left: 25%;
                }
                .row .col.pull-m3
                {
                    right: 25%;
                }
                .row .col.push-m3
                {
                    left: 25%;
                }
                .row .col.offset-m4
                {
                    margin-left: 33.33333%;
                }
                .row .col.pull-m4
                {
                    right: 33.33333%;
                }
                .row .col.push-m4
                {
                    left: 33.33333%;
                }
                .row .col.offset-m5
                {
                    margin-left: 41.66667%;
                }
                .row .col.pull-m5
                {
                    right: 41.66667%;
                }
                .row .col.push-m5
                {
                    left: 41.66667%;
                }
                .row .col.offset-m6
                {
                    margin-left: 50%;
                }
                .row .col.pull-m6
                {
                    right: 50%;
                }
                .row .col.push-m6
                {
                    left: 50%;
                }
                .row .col.offset-m7
                {
                    margin-left: 58.33333%;
                }
                .row .col.pull-m7
                {
                    right: 58.33333%;
                }
                .row .col.push-m7
                {
                    left: 58.33333%;
                }
                .row .col.offset-m8
                {
                    margin-left: 66.66667%;
                }
                .row .col.pull-m8
                {
                    right: 66.66667%;
                }
                .row .col.push-m8
                {
                    left: 66.66667%;
                }
                .row .col.offset-m9
                {
                    margin-left: 75%;
                }
                .row .col.pull-m9
                {
                    right: 75%;
                }
                .row .col.push-m9
                {
                    left: 75%;
                }
                .row .col.offset-m10
                {
                    margin-left: 83.33333%;
                }
                .row .col.pull-m10
                {
                    right: 83.33333%;
                }
                .row .col.push-m10
                {
                    left: 83.33333%;
                }
                .row .col.offset-m11
                {
                    margin-left: 91.66667%;
                }
                .row .col.pull-m11
                {
                    right: 91.66667%;
                }
                .row .col.push-m11
                {
                    left: 91.66667%;
                }
                .row .col.offset-m12
                {
                    margin-left: 100%;
                }
                .row .col.pull-m12
                {
                    right: 100%;
                }
                .row .col.push-m12
                {
                    left: 100%;
                }
            }
            @media only screen and (min-width: 993px)
            {
                .row .col.l1
                {
                    right: auto;
                    left: auto;
            
                    width: 8.33333%;
                    margin-left: auto;
                }
                .row .col.l2
                {
                    right: auto;
                    left: auto;
            
                    width: 16.66667%;
                    margin-left: auto;
                }
                .row .col.l3
                {
                    right: auto;
                    left: auto;
            
                    width: 25%;
                    margin-left: auto;
                }
                .row .col.l4
                {
                    right: auto;
                    left: auto;
            
                    width: 33.33333%;
                    margin-left: auto;
                }
                .row .col.l5
                {
                    right: auto;
                    left: auto;
            
                    width: 41.66667%;
                    margin-left: auto;
                }
                .row .col.l6
                {
                    right: auto;
                    left: auto;
            
                    width: 50%;
                    margin-left: auto;
                }
                .row .col.l7
                {
                    right: auto;
                    left: auto;
            
                    width: 58.33333%;
                    margin-left: auto;
                }
                .row .col.l8
                {
                    right: auto;
                    left: auto;
            
                    width: 66.66667%;
                    margin-left: auto;
                }
                .row .col.l9
                {
                    right: auto;
                    left: auto;
            
                    width: 75%;
                    margin-left: auto;
                }
                .row .col.l10
                {
                    right: auto;
                    left: auto;
            
                    width: 83.33333%;
                    margin-left: auto;
                }
                .row .col.l11
                {
                    right: auto;
                    left: auto;
            
                    width: 91.66667%;
                    margin-left: auto;
                }
                .row .col.l12
                {
                    right: auto;
                    left: auto;
            
                    width: 100%;
                    margin-left: auto;
                }
                .row .col.offset-l1
                {
                    margin-left: 8.33333%;
                }
                .row .col.pull-l1
                {
                    right: 8.33333%;
                }
                .row .col.push-l1
                {
                    left: 8.33333%;
                }
                .row .col.offset-l2
                {
                    margin-left: 16.66667%;
                }
                .row .col.pull-l2
                {
                    right: 16.66667%;
                }
                .row .col.push-l2
                {
                    left: 16.66667%;
                }
                .row .col.offset-l3
                {
                    margin-left: 25%;
                }
                .row .col.pull-l3
                {
                    right: 25%;
                }
                .row .col.push-l3
                {
                    left: 25%;
                }
                .row .col.offset-l4
                {
                    margin-left: 33.33333%;
                }
                .row .col.pull-l4
                {
                    right: 33.33333%;
                }
                .row .col.push-l4
                {
                    left: 33.33333%;
                }
                .row .col.offset-l5
                {
                    margin-left: 41.66667%;
                }
                .row .col.pull-l5
                {
                    right: 41.66667%;
                }
                .row .col.push-l5
                {
                    left: 41.66667%;
                }
                .row .col.offset-l6
                {
                    margin-left: 50%;
                }
                .row .col.pull-l6
                {
                    right: 50%;
                }
                .row .col.push-l6
                {
                    left: 50%;
                }
                .row .col.offset-l7
                {
                    margin-left: 58.33333%;
                }
                .row .col.pull-l7
                {
                    right: 58.33333%;
                }
                .row .col.push-l7
                {
                    left: 58.33333%;
                }
                .row .col.offset-l8
                {
                    margin-left: 66.66667%;
                }
                .row .col.pull-l8
                {
                    right: 66.66667%;
                }
                .row .col.push-l8
                {
                    left: 66.66667%;
                }
                .row .col.offset-l9
                {
                    margin-left: 75%;
                }
                .row .col.pull-l9
                {
                    right: 75%;
                }
                .row .col.push-l9
                {
                    left: 75%;
                }
                .row .col.offset-l10
                {
                    margin-left: 83.33333%;
                }
                .row .col.pull-l10
                {
                    right: 83.33333%;
                }
                .row .col.push-l10
                {
                    left: 83.33333%;
                }
                .row .col.offset-l11
                {
                    margin-left: 91.66667%;
                }
                .row .col.pull-l11
                {
                    right: 91.66667%;
                }
                .row .col.push-l11
                {
                    left: 91.66667%;
                }
                .row .col.offset-l12
                {
                    margin-left: 100%;
                }
                .row .col.pull-l12
                {
                    right: 100%;
                }
                .row .col.push-l12
                {
                    left: 100%;
                }
            }
            @media only screen and (min-width: 1201px)
            {
                .row .col.xl1
                {
                    right: auto;
                    left: auto;
            
                    width: 8.33333%;
                    margin-left: auto;
                }
                .row .col.xl2
                {
                    right: auto;
                    left: auto;
            
                    width: 16.66667%;
                    margin-left: auto;
                }
                .row .col.xl3
                {
                    right: auto;
                    left: auto;
            
                    width: 25%;
                    margin-left: auto;
                }
                .row .col.xl4
                {
                    right: auto;
                    left: auto;
            
                    width: 33.33333%;
                    margin-left: auto;
                }
                .row .col.xl5
                {
                    right: auto;
                    left: auto;
            
                    width: 41.66667%;
                    margin-left: auto;
                }
                .row .col.xl6
                {
                    right: auto;
                    left: auto;
            
                    width: 50%;
                    margin-left: auto;
                }
                .row .col.xl7
                {
                    right: auto;
                    left: auto;
            
                    width: 58.33333%;
                    margin-left: auto;
                }
                .row .col.xl8
                {
                    right: auto;
                    left: auto;
            
                    width: 66.66667%;
                    margin-left: auto;
                }
                .row .col.xl9
                {
                    right: auto;
                    left: auto;
            
                    width: 75%;
                    margin-left: auto;
                }
                .row .col.xl10
                {
                    right: auto;
                    left: auto;
            
                    width: 83.33333%;
                    margin-left: auto;
                }
                .row .col.xl11
                {
                    right: auto;
                    left: auto;
            
                    width: 91.66667%;
                    margin-left: auto;
                }
                .row .col.xl12
                {
                    right: auto;
                    left: auto;
            
                    width: 100%;
                    margin-left: auto;
                }
                .row .col.offset-xl1
                {
                    margin-left: 8.33333%;
                }
                .row .col.pull-xl1
                {
                    right: 8.33333%;
                }
                .row .col.push-xl1
                {
                    left: 8.33333%;
                }
                .row .col.offset-xl2
                {
                    margin-left: 16.66667%;
                }
                .row .col.pull-xl2
                {
                    right: 16.66667%;
                }
                .row .col.push-xl2
                {
                    left: 16.66667%;
                }
                .row .col.offset-xl3
                {
                    margin-left: 25%;
                }
                .row .col.pull-xl3
                {
                    right: 25%;
                }
                .row .col.push-xl3
                {
                    left: 25%;
                }
                .row .col.offset-xl4
                {
                    margin-left: 33.33333%;
                }
                .row .col.pull-xl4
                {
                    right: 33.33333%;
                }
                .row .col.push-xl4
                {
                    left: 33.33333%;
                }
                .row .col.offset-xl5
                {
                    margin-left: 41.66667%;
                }
                .row .col.pull-xl5
                {
                    right: 41.66667%;
                }
                .row .col.push-xl5
                {
                    left: 41.66667%;
                }
                .row .col.offset-xl6
                {
                    margin-left: 50%;
                }
                .row .col.pull-xl6
                {
                    right: 50%;
                }
                .row .col.push-xl6
                {
                    left: 50%;
                }
                .row .col.offset-xl7
                {
                    margin-left: 58.33333%;
                }
                .row .col.pull-xl7
                {
                    right: 58.33333%;
                }
                .row .col.push-xl7
                {
                    left: 58.33333%;
                }
                .row .col.offset-xl8
                {
                    margin-left: 66.66667%;
                }
                .row .col.pull-xl8
                {
                    right: 66.66667%;
                }
                .row .col.push-xl8
                {
                    left: 66.66667%;
                }
                .row .col.offset-xl9
                {
                    margin-left: 75%;
                }
                .row .col.pull-xl9
                {
                    right: 75%;
                }
                .row .col.push-xl9
                {
                    left: 75%;
                }
                .row .col.offset-xl10
                {
                    margin-left: 83.33333%;
                }
                .row .col.pull-xl10
                {
                    right: 83.33333%;
                }
                .row .col.push-xl10
                {
                    left: 83.33333%;
                }
                .row .col.offset-xl11
                {
                    margin-left: 91.66667%;
                }
                .row .col.pull-xl11
                {
                    right: 91.66667%;
                }
                .row .col.push-xl11
                {
                    left: 91.66667%;
                }
                .row .col.offset-xl12
                {
                    margin-left: 100%;
                }
                .row .col.pull-xl12
                {
                    right: 100%;
                }
                .row .col.push-xl12
                {
                    left: 100%;
                }
            }
            
            nav
            {
                line-height: 56px;
            
                width: 100%;
                height: 56px;
            
                color: #fff;
                background-color: #9c27b0;
            }
            nav.nav-extended
            {
                height: auto;
            }
            nav.nav-extended .nav-wrapper
            {
                height: auto;
                min-height: 56px;
            }
            nav.nav-extended .nav-content
            {
                line-height: normal;
            
                position: relative;
            }
            nav a
            {
                color: #fff;
            }
            nav i,
            nav [class^='mdi-'],
            nav [class*='mdi-']
            {
                font-size: 24px;
                line-height: 56px;
            
                display: block;
            
                height: 56px;
            }
            nav .nav-wrapper
            {
                position: relative;
            
                height: 100%;
            }
            nav .sidenav-trigger
            {
                position: relative;
                z-index: 1;
            
                float: left;
            
                height: 56px;
            }
            nav .sidenav-trigger i
            {
                line-height: 56px;
            
                height: 56px;
            }
            nav .nav-title
            {
                font-size: 32px;
            
                display: inline-block;
            
                padding: 28px 0;
            }
            nav ul
            {
                margin: 0;
            }
            nav ul li
            {
                float: left;
            
                padding: 0;
            
                -webkit-transition: background-color .3s;
                   -moz-transition: background-color .3s;
                     -o-transition: background-color .3s;
                        transition: background-color .3s;
            }
            nav ul li.active
            {
                background-color: rgba(0, 0, 0, .1);
            }
            nav ul a
            {
                font-size: 1rem;
            
                display: block;
            
                padding: 0 15px;
            
                cursor: pointer;
                -webkit-transition: background-color .3s;
                   -moz-transition: background-color .3s;
                     -o-transition: background-color .3s;
                        transition: background-color .3s;
            
                color: #6b6666;
            }
            nav ul a.btn,
            nav ul a.btn-large,
            nav ul a.btn-small,
            nav ul a.btn-large,
            nav ul a.btn-flat,
            nav ul a.btn-floating
            {
                margin-top: -2px;
                margin-right: 15px;
                margin-left: 15px;
            }
            nav ul a.btn > .material-icons,
            nav ul a.btn-large > .material-icons,
            nav ul a.btn-small > .material-icons,
            nav ul a.btn-large > .material-icons,
            nav ul a.btn-flat > .material-icons,
            nav ul a.btn-floating > .material-icons
            {
                line-height: inherit;
            
                height: inherit;
            }
            nav ul a:hover
            {
                background-color: rgba(0, 0, 0, .1);
            }
            nav ul.left
            {
                float: left;
            }
            nav form
            {
                height: 100%;
            }
            nav .input-field
            {
                height: 100%;
                margin: 0;
            }
            nav .input-field input
            {
                font-size: 1.2rem;
            
                height: 100%;
                padding-left: 2rem;
            
                border: none;
            }
            nav .input-field input:focus,
            nav .input-field input[type='text']:valid,
            nav .input-field input[type='password']:valid,
            nav .input-field input[type='email']:valid,
            nav .input-field input[type='url']:valid,
            nav .input-field input[type='date']:valid
            {
                border: none;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            nav .input-field label
            {
                top: 0;
                left: 0;
            }
            nav .input-field label i
            {
                -webkit-transition: color .3s;
                   -moz-transition: color .3s;
                     -o-transition: color .3s;
                        transition: color .3s;
            
                color: rgba(255, 255, 255, .7);
            }
            nav .input-field label.active i
            {
                color: #fff;
            }
            
            .navbar-fixed
            {
                position: relative;
                z-index: 997;
            
                height: 56px;
            }
            .navbar-fixed nav
            {
                position: fixed;
            }
            
            @media only screen and (min-width: 601px)
            {
                nav.nav-extended .nav-wrapper
                {
                    min-height: 64px;
                }
                nav,
                nav .nav-wrapper i,
                nav a.sidenav-trigger,
                nav a.sidenav-trigger i
                {
                    line-height: 64px;
            
                    height: 64px;
                }
                .navbar-fixed
                {
                    height: 64px;
                }
            }
            
            a
            {
                text-decoration: none;
            }
            
            html
            {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
                font-weight: normal;
                line-height: 1.5;
            
                color: rgba(0, 0, 0, .87);
            }
            @media only screen and (min-width: 0)
            {
                html
                {
                    font-size: 14px;
                }
            }
            @media only screen and (min-width: 992px)
            {
                html
                {
                    font-size: 14.5px;
                }
            }
            @media only screen and (min-width: 1200px)
            {
                html
                {
                    font-size: 15px;
                }
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6
            {
                font-weight: 400;
                line-height: 1.3;
            }
            
            h1 a,
            h2 a,
            h3 a,
            h4 a,
            h5 a,
            h6 a
            {
                font-weight: inherit;
            }
            
            h1
            {
                font-size: 4.2rem;
                line-height: 110%;
            
                margin: 2.8rem 0 1.68rem 0;
            }
            
            h2
            {
                font-size: 3.56rem;
                line-height: 110%;
            
                margin: 2.37333rem 0 1.424rem 0;
            }
            
            h3
            {
                font-size: 2.92rem;
                line-height: 110%;
            
                margin: 1.94667rem 0 1.168rem 0;
            }
            
            h4
            {
                font-size: 2.28rem;
                line-height: 110%;
            
                margin: 1.52rem 0 .912rem 0;
            }
            
            h5
            {
                font-size: 1.64rem;
                line-height: 110%;
            
                margin: 1.09333rem 0 .656rem 0;
            }
            
            h6
            {
                font-size: 1.15rem;
                line-height: 110%;
            
                margin: .76667rem 0 .46rem 0;
            }
            
            em
            {
                font-style: italic;
            }
            
            strong
            {
                font-weight: 500;
            }
            
            small
            {
                font-size: 75%;
            }
            
            .light
            {
                font-weight: 300;
            }
            
            .thin
            {
                font-weight: 200;
            }
            
            @media only screen and (min-width: 360px)
            {
                .flow-text
                {
                    font-size: 1.2rem;
                }
            }
            
            @media only screen and (min-width: 390px)
            {
                .flow-text
                {
                    font-size: 1.224rem;
                }
            }
            
            @media only screen and (min-width: 420px)
            {
                .flow-text
                {
                    font-size: 1.248rem;
                }
            }
            
            @media only screen and (min-width: 450px)
            {
                .flow-text
                {
                    font-size: 1.272rem;
                }
            }
            
            @media only screen and (min-width: 480px)
            {
                .flow-text
                {
                    font-size: 1.296rem;
                }
            }
            
            @media only screen and (min-width: 510px)
            {
                .flow-text
                {
                    font-size: 1.32rem;
                }
            }
            
            @media only screen and (min-width: 540px)
            {
                .flow-text
                {
                    font-size: 1.344rem;
                }
            }
            
            @media only screen and (min-width: 570px)
            {
                .flow-text
                {
                    font-size: 1.368rem;
                }
            }
            
            @media only screen and (min-width: 600px)
            {
                .flow-text
                {
                    font-size: 1.392rem;
                }
            }
            
            @media only screen and (min-width: 630px)
            {
                .flow-text
                {
                    font-size: 1.416rem;
                }
            }
            
            @media only screen and (min-width: 660px)
            {
                .flow-text
                {
                    font-size: 1.44rem;
                }
            }
            
            @media only screen and (min-width: 690px)
            {
                .flow-text
                {
                    font-size: 1.464rem;
                }
            }
            
            @media only screen and (min-width: 720px)
            {
                .flow-text
                {
                    font-size: 1.488rem;
                }
            }
            
            @media only screen and (min-width: 750px)
            {
                .flow-text
                {
                    font-size: 1.512rem;
                }
            }
            
            @media only screen and (min-width: 780px)
            {
                .flow-text
                {
                    font-size: 1.536rem;
                }
            }
            
            @media only screen and (min-width: 810px)
            {
                .flow-text
                {
                    font-size: 1.56rem;
                }
            }
            
            @media only screen and (min-width: 840px)
            {
                .flow-text
                {
                    font-size: 1.584rem;
                }
            }
            
            @media only screen and (min-width: 870px)
            {
                .flow-text
                {
                    font-size: 1.608rem;
                }
            }
            
            @media only screen and (min-width: 900px)
            {
                .flow-text
                {
                    font-size: 1.632rem;
                }
            }
            
            @media only screen and (min-width: 930px)
            {
                .flow-text
                {
                    font-size: 1.656rem;
                }
            }
            
            @media only screen and (min-width: 960px)
            {
                .flow-text
                {
                    font-size: 1.68rem;
                }
            }
            
            @media only screen and (max-width: 360px)
            {
                .flow-text
                {
                    font-size: 1.2rem;
                }
            }
            
            .scale-transition
            {
                -webkit-transition: -webkit-transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
                   -moz-transition:         transform .3s cubic-bezier(.53, .01, .36, 1.63), -moz-transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
                     -o-transition:      -o-transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
                        transition: -webkit-transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
                        transition:         transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
                        transition:         transform .3s cubic-bezier(.53, .01, .36, 1.63), -webkit-transform .3s cubic-bezier(.53, .01, .36, 1.63), -moz-transform .3s cubic-bezier(.53, .01, .36, 1.63), -o-transform .3s cubic-bezier(.53, .01, .36, 1.63) !important;
            }
            .scale-transition.scale-out
            {
                -webkit-transition: -webkit-transform .2s !important;
                   -moz-transition:         transform .2s, -moz-transform .2s !important;
                     -o-transition:      -o-transform .2s !important;
                        transition: -webkit-transform .2s !important;
                        transition:         transform .2s !important;
                        transition:         transform .2s, -webkit-transform .2s, -moz-transform .2s, -o-transform .2s !important;
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            }
            .scale-transition.scale-in
            {
                -webkit-transform: scale(1);
                   -moz-transform: scale(1);
                    -ms-transform: scale(1);
                     -o-transform: scale(1);
                        transform: scale(1);
            }
            
            .card-panel
            {
                margin: .5rem 0 1rem 0;
                padding: 24px;
            
                -webkit-transition: -webkit-box-shadow .25s;
                   -moz-transition:         box-shadow .25s;
                     -o-transition:         box-shadow .25s;
                        transition: -webkit-box-shadow .25s;
                        transition:         box-shadow .25s;
                        transition:         box-shadow .25s, -webkit-box-shadow .25s;
            
                border-radius: 2px;
                background-color: #fff;
            }
            
            .card
            {
                position: relative;
            
                margin: .5rem 0 1rem 0;
            
                -webkit-transition: -webkit-box-shadow .25s;
                   -moz-transition:         box-shadow .25s;
                     -o-transition:         box-shadow .25s;
                        transition: -webkit-box-shadow .25s;
                        transition:         box-shadow .25s;
                        transition:         box-shadow .25s, -webkit-box-shadow .25s;
            
                border-radius: 2px;
                background-color: #fff;
            }
            .card .card-title
            {
                font-size: 24px;
                font-weight: 300;
            }
            .card .card-title.activator
            {
                cursor: pointer;
            }
            .card.small,
            .card.medium,
            .card.large
            {
                position: relative;
            }
            .card.small .card-image,
            .card.medium .card-image,
            .card.large .card-image
            {
                overflow: hidden;
            
                max-height: 60%;
            }
            .card.small .card-image + .card-content,
            .card.medium .card-image + .card-content,
            .card.large .card-image + .card-content
            {
                max-height: 40%;
            }
            .card.small .card-content,
            .card.medium .card-content,
            .card.large .card-content
            {
                overflow: hidden;
            
                max-height: 100%;
            }
            .card.small .card-action,
            .card.medium .card-action,
            .card.large .card-action
            {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
            }
            .card.small
            {
                height: 300px;
            }
            .card.medium
            {
                height: 400px;
            }
            .card.large
            {
                height: 500px;
            }
            .card.horizontal
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            }
            .card.horizontal.small .card-image,
            .card.horizontal.medium .card-image,
            .card.horizontal.large .card-image
            {
                overflow: visible;
            
                height: 100%;
                max-height: none;
            }
            .card.horizontal.small .card-image img,
            .card.horizontal.medium .card-image img,
            .card.horizontal.large .card-image img
            {
                height: 100%;
            }
            .card.horizontal .card-image
            {
                max-width: 50%;
            }
            .card.horizontal .card-image img
            {
                width: auto;
                max-width: 100%;
            
                border-radius: 2px 0 0 2px;
            }
            .card.horizontal .card-stacked
            {
                position: relative;
            
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
                        flex-direction: column;
            
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                   -moz-box-orient: vertical;
                   -moz-box-direction: normal;
                    -ms-flex-direction: column;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                   -moz-box-flex: 1;
                    -ms-flex: 1;
                        flex: 1;
            }
            .card.horizontal .card-stacked .card-content
            {
                -webkit-box-flex: 1;
                -webkit-flex-grow: 1;
                   -moz-box-flex: 1;
                -ms-flex-positive: 1;
                        flex-grow: 1;
            }
            .card.sticky-action .card-action
            {
                z-index: 2;
            }
            .card.sticky-action .card-reveal
            {
                z-index: 1;
            
                padding-bottom: 64px;
            }
            .card .card-image
            {
                position: relative;
            }
            .card .card-image img
            {
                position: relative;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            
                display: block;
            
                width: 100%;
            
                border-radius: 2px 2px 0 0;
            }
            .card .card-image .card-title
            {
                position: absolute;
                bottom: 0;
                left: 0;
            
                max-width: 100%;
                padding: 24px;
            
                color: #fff;
            }
            .card .card-content
            {
                padding: 24px;
            
                border-radius: 0 0 2px 2px;
            }
            .card .card-content p
            {
                margin: 0;
            }
            .card .card-content .card-title
            {
                line-height: 32px;
            
                display: block;
            
                margin-bottom: 8px;
            }
            .card .card-content .card-title i
            {
                line-height: 32px;
            }
            .card .card-action
            {
                position: relative;
            
                padding: 16px 24px;
            
                border-top: 1px solid rgba(160, 160, 160, .2);
                background-color: inherit;
            }
            .card .card-action:last-child
            {
                border-radius: 0 0 2px 2px;
            }
            .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating)
            {
                margin-right: 24px;
            
                -webkit-transition: color .3s ease;
                   -moz-transition: color .3s ease;
                     -o-transition: color .3s ease;
                        transition: color .3s ease;
                text-transform: uppercase;
            
                color: #3949ab;
            }
            .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover
            {
                color: #7885d2;
            }
            .card .card-reveal
            {
                position: absolute;
                z-index: 3;
                top: 100%;
                left: 0;
            
                display: none;
                overflow-y: auto;
            
                width: 100%;
                height: 100%;
                padding: 24px;
            
                background-color: #fff;
            }
            .card .card-reveal .card-title
            {
                display: block;
            
                cursor: pointer;
            }
            
            #toast-container
            {
                position: fixed;
                z-index: 10000;
            
                display: block;
            }
            @media only screen and (max-width: 600px)
            {
                #toast-container
                {
                    bottom: 0;
            
                    min-width: 100%;
                }
            }
            @media only screen and (min-width: 601px) and (max-width: 992px)
            {
                #toast-container
                {
                    bottom: 7%;
                    left: 5%;
            
                    max-width: 90%;
                }
            }
            @media only screen and (min-width: 993px)
            {
                #toast-container
                {
                    top: 10%;
                    right: 7%;
            
                    max-width: 86%;
                }
            }
            
            .toast
            {
                font-size: 1.1rem;
                font-weight: 300;
                line-height: 1.5em;
            
                position: relative;
                top: 35px;
            
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                width: auto;
                max-width: 100%;
                height: auto;
                min-height: 48px;
                margin-top: 10px;
                padding: 10px 25px;
            
                cursor: default;
            
                color: #fff;
                border-radius: 2px;
                background-color: #323232;
            
                -webkit-box-align: center;
                -webkit-align-items: center;
                   -moz-box-align: center;
                -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                -ms-flex-pack: justify;
                        justify-content: space-between;
            }
            .toast .toast-action
            {
                font-weight: 500;
            
                margin-right: -25px;
                margin-left: 3rem;
            
                color: #eeff41;
            }
            .toast.rounded
            {
                border-radius: 24px;
            }
            @media only screen and (max-width: 600px)
            {
                .toast
                {
                    width: 100%;
            
                    border-radius: 0;
                }
            }
            
            .tabs
            {
                position: relative;
            
                overflow-x: auto;
                overflow-y: hidden;
            
                width: 100%;
                height: 48px;
                margin: 0 auto;
            
                white-space: nowrap;
            
                background-color: #fff;
            }
            .tabs.tabs-transparent
            {
                background-color: transparent;
            }
            .tabs.tabs-transparent .tab a,
            .tabs.tabs-transparent .tab.disabled a,
            .tabs.tabs-transparent .tab.disabled a:hover
            {
                color: rgba(255, 255, 255, .7);
            }
            .tabs.tabs-transparent .tab a:hover,
            .tabs.tabs-transparent .tab a.active
            {
                color: #fff;
            }
            .tabs.tabs-transparent .indicator
            {
                background-color: #fff;
            }
            .tabs.tabs-fixed-width
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            }
            .tabs.tabs-fixed-width .tab
            {
                -webkit-box-flex: 1;
                -webkit-flex-grow: 1;
                   -moz-box-flex: 1;
                -ms-flex-positive: 1;
                        flex-grow: 1;
            }
            .tabs .tab
            {
                line-height: 48px;
            
                display: inline-block;
            
                height: 48px;
                margin: 0;
                padding: 0;
            
                text-align: center;
                text-transform: uppercase;
            }
            .tabs .tab a
            {
                font-size: 14px;
            
                display: block;
                overflow: hidden;
            
                width: 100%;
                height: 100%;
                padding: 0 24px;
            
                -webkit-transition: color .28s ease, background-color .28s ease;
                   -moz-transition: color .28s ease, background-color .28s ease;
                     -o-transition: color .28s ease, background-color .28s ease;
                        transition: color .28s ease, background-color .28s ease;
                text-overflow: ellipsis;
            
                color: rgba(156, 39, 176, .7);
            }
            .tabs .tab a:focus,
            .tabs .tab a:focus.active
            {
                outline: none;
                background-color: rgba(195, 76, 215, .2);
            }
            .tabs .tab a:hover,
            .tabs .tab a.active
            {
                color: #9c27b0;
                background-color: transparent;
            }
            .tabs .tab.disabled a,
            .tabs .tab.disabled a:hover
            {
                cursor: default;
            
                color: rgba(156, 39, 176, .4);
            }
            .tabs .indicator
            {
                position: absolute;
                bottom: 0;
            
                height: 2px;
            
                background-color: #c34cd7;
            
                will-change: left, right;
            }
            
            @media only screen and (max-width: 992px)
            {
                .tabs
                {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display:    -moz-box;
                    display: -ms-flexbox;
                    display:         flex;
                }
                .tabs .tab
                {
                    -webkit-box-flex: 1;
                    -webkit-flex-grow: 1;
                       -moz-box-flex: 1;
                    -ms-flex-positive: 1;
                            flex-grow: 1;
                }
                .tabs .tab a
                {
                    padding: 0 12px;
                }
            }
            
            .material-tooltip
            {
                font-size: 1rem;
                line-height: 120%;
            
                position: absolute;
                z-index: 2000;
                top: 0;
                left: 0;
            
                visibility: hidden;
                overflow: hidden;
            
                max-width: -webkit-calc(100% - 4px);
                max-width:    -moz-calc(100% - 4px);
                max-width:         calc(100% - 4px);
                min-height: 36px;
                padding: 10px 8px;
            
                text-align: center;
                pointer-events: none;
            
                opacity: 0;
                color: #fff;
                border-radius: 2px;
                background-color: transparent;
                background-color: #323232;
            }
            
            .backdrop
            {
                position: absolute;
                z-index: -1;
            
                visibility: hidden;
            
                width: 14px;
                height: 7px;
            
                -webkit-transform-origin: 50% 0;
                   -moz-transform-origin: 50% 0;
                    -ms-transform-origin: 50% 0;
                     -o-transform-origin: 50% 0;
                        transform-origin: 50% 0;
            
                opacity: 0;
                border-radius: 0 0 50% 50%;
                background-color: #323232;
            }
            
            .btn,
            .btn-large,
            .btn-small,
            .btn-flat
            {
                line-height: 36px;
            
                display: inline-block;
            
                height: 36px;
                padding: 0 2rem;
            
                vertical-align: middle;
                text-transform: uppercase;
            
                border: none;
                border-radius: 2px;
            
                -webkit-tap-highlight-color: transparent;
            }
            
            .btn.disabled,
            .disabled.btn-large,
            .disabled.btn-small,
            .btn-floating.disabled,
            .btn-large.disabled,
            .btn-small.disabled,
            .btn-flat.disabled,
            .btn:disabled,
            .btn-large:disabled,
            .btn-small:disabled,
            .btn-floating:disabled,
            .btn-large:disabled,
            .btn-small:disabled,
            .btn-flat:disabled,
            .btn[disabled],
            .btn-large[disabled],
            .btn-small[disabled],
            .btn-floating[disabled],
            .btn-large[disabled],
            .btn-small[disabled],
            .btn-flat[disabled]
            {
                cursor: default;
                pointer-events: none;
            
                color: #9f9f9f !important;
                background-color: #dfdfdf !important;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .btn.disabled:hover,
            .disabled.btn-large:hover,
            .disabled.btn-small:hover,
            .btn-floating.disabled:hover,
            .btn-large.disabled:hover,
            .btn-small.disabled:hover,
            .btn-flat.disabled:hover,
            .btn:disabled:hover,
            .btn-large:disabled:hover,
            .btn-small:disabled:hover,
            .btn-floating:disabled:hover,
            .btn-large:disabled:hover,
            .btn-small:disabled:hover,
            .btn-flat:disabled:hover,
            .btn[disabled]:hover,
            .btn-large[disabled]:hover,
            .btn-small[disabled]:hover,
            .btn-floating[disabled]:hover,
            .btn-large[disabled]:hover,
            .btn-small[disabled]:hover,
            .btn-flat[disabled]:hover
            {
                color: #9f9f9f !important;
                background-color: #dfdfdf !important;
            }
            
            .btn,
            .btn-large,
            .btn-small,
            .btn-floating,
            .btn-large,
            .btn-small,
            .btn-flat
            {
                font-size: 1rem;
            
                outline: 0;
            }
            .btn i,
            .btn-large i,
            .btn-small i,
            .btn-floating i,
            .btn-large i,
            .btn-small i,
            .btn-flat i
            {
                font-size: 1.3rem;
                line-height: inherit;
            }
            
            .btn:focus,
            .btn-large:focus,
            .btn-small:focus,
            .btn-floating:focus
            {
                background-color: #008fa1;
            }
            
            .btn,
            .btn-large,
            .btn-small
            {
                cursor: pointer;
                -webkit-transition: background-color .2s ease-out;
                   -moz-transition: background-color .2s ease-out;
                     -o-transition: background-color .2s ease-out;
                        transition: background-color .2s ease-out;
                text-align: center;
                text-decoration: none;
                letter-spacing: .5px;
            
                color: #fff;
                background-color: #00bcd4;
            }
            .btn:hover,
            .btn-large:hover,
            .btn-small:hover
            {
                background-color: #00d3ee;
            }
            
            .btn-floating
            {
                line-height: 40px;
            
                position: relative;
                z-index: 1;
            
                display: inline-block;
                overflow: hidden;
            
                width: 40px;
                height: 40px;
                padding: 0;
            
                cursor: pointer;
                -webkit-transition: background-color .3s;
                   -moz-transition: background-color .3s;
                     -o-transition: background-color .3s;
                        transition: background-color .3s;
                vertical-align: middle;
            
                color: #fff;
                border-radius: 50%;
                background-color: #00bcd4;
            }
            .btn-floating:hover
            {
                background-color: #00bcd4;
            }
            .btn-floating:before
            {
                border-radius: 0;
            }
            .btn-floating.btn-large
            {
                width: 4rem;
                height: 4rem;
                padding: 0;
            }
            .btn-floating.btn-large.halfway-fab
            {
                bottom: -2rem;
            }
            .btn-floating.btn-large i
            {
                line-height: 4rem;
            }
            .btn-floating.btn-small
            {
                width: 32.4px;
                height: 32.4px;
            }
            .btn-floating.btn-small.halfway-fab
            {
                bottom: -16.2px;
            }
            .btn-floating.btn-small i
            {
                line-height: 32.4px;
            }
            .btn-floating.halfway-fab
            {
                position: absolute;
                right: 24px;
                bottom: -20px;
            }
            .btn-floating.halfway-fab.left
            {
                right: auto;
                left: 24px;
            }
            .btn-floating i
            {
                font-size: 1.6rem;
                line-height: 40px;
            
                display: inline-block;
            
                width: inherit;
            
                text-align: center;
            
                color: #fff;
            }
            
            button.btn-floating
            {
                border: none;
            }
            
            .fixed-action-btn
            {
                position: fixed;
                z-index: 997;
                right: 23px;
                bottom: 23px;
            
                margin-bottom: 0;
                padding-top: 15px;
            }
            .fixed-action-btn.active ul
            {
                visibility: visible;
            }
            .fixed-action-btn.direction-left,
            .fixed-action-btn.direction-right
            {
                padding: 0 0 0 15px;
            }
            .fixed-action-btn.direction-left ul,
            .fixed-action-btn.direction-right ul
            {
                top: 50%;
                right: 64px;
                left: auto;
                /*width 100% only goes to width of button container */
            
                width: 500px;
                height: 100%;
            
                -webkit-transform: translateY(-50%);
                   -moz-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                     -o-transform: translateY(-50%);
                        transform: translateY(-50%);
                text-align: right;
            }
            .fixed-action-btn.direction-left ul li,
            .fixed-action-btn.direction-right ul li
            {
                display: inline-block;
            
                margin: 7.5px 15px 0 0;
            }
            .fixed-action-btn.direction-right
            {
                padding: 0 15px 0 0;
            }
            .fixed-action-btn.direction-right ul
            {
                right: auto;
                left: 64px;
            
                text-align: left;
            
                direction: rtl;
            }
            .fixed-action-btn.direction-right ul li
            {
                margin: 7.5px 0 0 15px;
            }
            .fixed-action-btn.direction-bottom
            {
                padding: 0 0 15px 0;
            }
            .fixed-action-btn.direction-bottom ul
            {
                top: 64px;
                bottom: auto;
            
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
                        flex-direction: column-reverse;
            
                -webkit-box-orient: vertical;
                -webkit-box-direction: reverse;
                -webkit-flex-direction: column-reverse;
                   -moz-box-orient: vertical;
                   -moz-box-direction: reverse;
                    -ms-flex-direction: column-reverse;
            }
            .fixed-action-btn.direction-bottom ul li
            {
                margin: 15px 0 0 0;
            }
            .fixed-action-btn.toolbar
            {
                height: 4rem;
                padding: 0;
            }
            .fixed-action-btn.toolbar.active > a i
            {
                opacity: 0;
            }
            .fixed-action-btn.toolbar ul
            {
                z-index: 1;
                top: 0;
                bottom: 0;
            
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            }
            .fixed-action-btn.toolbar ul li
            {
                display: inline-block;
            
                height: 100%;
                margin: 0;
            
                -webkit-transition: none;
                   -moz-transition: none;
                     -o-transition: none;
                        transition: none;
            
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                   -moz-box-flex: 1;
                    -ms-flex: 1;
                        flex: 1;
            }
            .fixed-action-btn.toolbar ul li a
            {
                line-height: 4rem;
            
                position: relative;
                z-index: 1;
            
                display: block;
                overflow: hidden;
            
                width: 100%;
                height: 100%;
            
                color: #fff;
                background-color: transparent;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .fixed-action-btn.toolbar ul li a i
            {
                line-height: inherit;
            }
            .fixed-action-btn ul
            {
                position: absolute;
                right: 0;
                bottom: 64px;
                left: 0;
            
                visibility: hidden;
            
                margin: 0;
            
                text-align: center;
            }
            .fixed-action-btn ul li
            {
                margin-bottom: 15px;
            }
            .fixed-action-btn ul a.btn-floating
            {
                opacity: 0;
            }
            .fixed-action-btn .fab-backdrop
            {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
            
                width: 40px;
                height: 40px;
            
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            
                border-radius: 50%;
                background-color: #00bcd4;
            }
            
            .btn-flat
            {
                cursor: pointer;
                -webkit-transition: background-color .2s;
                   -moz-transition: background-color .2s;
                     -o-transition: background-color .2s;
                        transition: background-color .2s;
            
                color: #343434;
                background-color: transparent;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .btn-flat:focus,
            .btn-flat:hover
            {
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .btn-flat:focus
            {
                background-color: rgba(0, 0, 0, .1);
            }
            .btn-flat.disabled,
            .btn-flat.btn-flat[disabled]
            {
                cursor: default;
            
                color: #b3b3b3 !important;
                background-color: transparent !important;
            }
            
            .btn-large
            {
                font-size: 1rem;
                line-height: 54px;
            
                height: 54px;
                padding: 0 28px;
            }
            .btn-large i
            {
                font-size: 1.6rem;
            }
            
            .btn-small
            {
                font-size: 1rem;
                line-height: 32.4px;
            
                height: 32.4px;
            }
            .btn-small i
            {
                font-size: 1.2rem;
            }
            
            .btn-block
            {
                display: block;
            }
            
            .dropdown-content
            {
                position: absolute;
                z-index: 9999;
                top: 0;
                left: 0;
            
                display: none;
                overflow-y: auto;
            
                min-width: 100px;
                margin: 0;
            
                -webkit-transform-origin: 0 0;
                   -moz-transform-origin: 0 0;
                    -ms-transform-origin: 0 0;
                     -o-transform-origin: 0 0;
                        transform-origin: 0 0;
            
                opacity: 0;
                background-color: #fff;
            }
            .dropdown-content:focus
            {
                outline: 0;
            }
            .dropdown-content li
            {
                line-height: 1.5rem;
            
                clear: both;
            
                width: 100%;
                min-height: 50px;
            
                cursor: pointer;
                text-align: left;
            
                color: rgba(0, 0, 0, .87);
            }
            .dropdown-content li:hover,
            .dropdown-content li.active
            {
                background-color: #eee;
            }
            .dropdown-content li:focus
            {
                outline: none;
            }
            .dropdown-content li.divider
            {
                height: 1px;
                min-height: 0;
            }
            .dropdown-content li > a,
            .dropdown-content li > span
            {
                font-size: 16px;
                line-height: 22px;
            
                display: block;
            
                padding: 14px 16px;
            
                color: #00bcd4;
            }
            .dropdown-content li > span > label
            {
                top: 1px;
                left: 0;
            
                height: 18px;
            }
            .dropdown-content li > a > i
            {
                line-height: inherit;
            
                float: left;
            
                width: 24px;
                height: inherit;
                margin: 0 24px 0 0;
            }
            
            body.keyboard-focused .dropdown-content li:focus
            {
                background-color: #dadada;
            }
            
            .input-field.col .dropdown-content [type='checkbox'] + label
            {
                top: 1px;
                left: 0;
            
                height: 18px;
            
                -webkit-transform: none;
                   -moz-transform: none;
                    -ms-transform: none;
                     -o-transform: none;
                        transform: none;
            }
            
            .dropdown-trigger
            {
                cursor: pointer;
            }
            
            /*!
             * Waves v0.6.0
             * http://fian.my.id/Waves
             *
             * Copyright 2014 Alfiana E. Sibuea and other contributors
             * Released under the MIT license
             * https://github.com/fians/Waves/blob/master/LICENSE
             */
            .waves-effect
            {
                position: relative;
                z-index: 1;
            
                display: inline-block;
                overflow: hidden;
            
                cursor: pointer;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
                -webkit-transition: .3s ease-out;
                   -moz-transition: .3s ease-out;
                     -o-transition: .3s ease-out;
                        transition: .3s ease-out;
                vertical-align: middle;
            
                -webkit-tap-highlight-color: transparent;
            }
            .waves-effect .waves-ripple
            {
                position: absolute;
            
                width: 20px;
                height: 20px;
                margin-top: -10px;
                margin-left: -10px;
            
                -webkit-transition: all .7s ease-out;
                   -moz-transition: all .7s ease-out;
                     -o-transition: all .7s ease-out;
                        transition: all .7s ease-out;
                -webkit-transition-property: opacity, -webkit-transform;
                   -moz-transition-property: transform, opacity, -moz-transform;
                     -o-transition-property: opacity, -o-transform;
                        transition-property: opacity, -webkit-transform;
                        transition-property: transform, opacity;
                        transition-property: transform, opacity, -webkit-transform, -moz-transform, -o-transform;
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
                pointer-events: none;
            
                opacity: 0;
                border-radius: 50%;
                background: rgba(0, 0, 0, .2);
            }
            .waves-effect.waves-light .waves-ripple
            {
                background-color: rgba(255, 255, 255, .45);
            }
            .waves-effect.waves-red .waves-ripple
            {
                background-color: rgba(244, 67, 54, .7);
            }
            .waves-effect.waves-yellow .waves-ripple
            {
                background-color: rgba(255, 235, 59, .7);
            }
            .waves-effect.waves-orange .waves-ripple
            {
                background-color: rgba(255, 152, 0, .7);
            }
            .waves-effect.waves-purple .waves-ripple
            {
                background-color: rgba(156, 39, 176, .7);
            }
            .waves-effect.waves-green .waves-ripple
            {
                background-color: rgba(76, 175, 80, .7);
            }
            .waves-effect.waves-teal .waves-ripple
            {
                background-color: rgba(0, 150, 136, .7);
            }
            .waves-effect input[type='button'],
            .waves-effect input[type='reset'],
            .waves-effect input[type='submit']
            {
                font-size: inherit;
                font-style: normal;
            
                text-transform: inherit;
            
                border: 0;
                background: none;
            }
            .waves-effect img
            {
                position: relative;
                z-index: -1;
            }
            
            .waves-notransition
            {
                -webkit-transition: none !important;
                   -moz-transition: none !important;
                     -o-transition: none !important;
                        transition: none !important;
            }
            
            .waves-circle
            {
                -webkit-transform: translateZ(0);
                   -moz-transform: translateZ(0);
                        transform: translateZ(0);
            
                -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
            }
            
            .waves-input-wrapper
            {
                vertical-align: bottom;
            
                border-radius: .2em;
            }
            .waves-input-wrapper .waves-button-input
            {
                position: relative;
                z-index: 1;
                top: 0;
                left: 0;
            }
            
            .waves-circle
            {
                line-height: 2.5em;
            
                width: 2.5em;
                height: 2.5em;
            
                text-align: center;
            
                border-radius: 50%;
            
                -webkit-mask-image: none;
            }
            
            .waves-block
            {
                display: block;
            }
            
            /* Firefox Bug: link not triggered */
            .waves-effect .waves-ripple
            {
                z-index: -1;
            }
            
            .modal
            {
                position: fixed;
                right: 0;
                left: 0;
            
                display: none;
                overflow-y: auto;
            
                width: 55%;
                max-height: 70%;
                margin: auto;
                padding: 0;
            
                border-radius: 2px;
                background-color: #fafafa;
            
                will-change: top, opacity;
            }
            .modal:focus
            {
                outline: none;
            }
            @media only screen and (max-width: 992px)
            {
                .modal
                {
                    width: 80%;
                }
            }
            .modal h1,
            .modal h2,
            .modal h3,
            .modal h4
            {
                margin-top: 0;
            }
            .modal .modal-content
            {
                padding: 24px;
            }
            .modal .modal-close
            {
                cursor: pointer;
            }
            .modal .modal-footer
            {
                width: 100%;
                height: 56px;
                padding: 4px 6px;
            
                text-align: right;
            
                border-radius: 0 0 2px 2px;
                background-color: #fafafa;
            }
            .modal .modal-footer .btn,
            .modal .modal-footer .btn-large,
            .modal .modal-footer .btn-small,
            .modal .modal-footer .btn-flat
            {
                margin: 6px 0;
            }
            
            .modal-overlay
            {
                position: fixed;
                z-index: 999;
                top: -25%;
                right: 0;
                bottom: 0;
                left: 0;
            
                display: none;
            
                width: 100%;
                height: 125%;
            
                background: #000;
            
                will-change: opacity;
            }
            
            .modal.modal-fixed-footer
            {
                height: 70%;
                padding: 0;
            }
            .modal.modal-fixed-footer .modal-content
            {
                position: absolute;
            
                overflow-y: auto;
            
                width: 100%;
                height: -webkit-calc(100% - 56px);
                height:    -moz-calc(100% - 56px);
                height:         calc(100% - 56px);
                max-height: 100%;
            }
            .modal.modal-fixed-footer .modal-footer
            {
                position: absolute;
                bottom: 0;
            
                border-top: 1px solid rgba(0, 0, 0, .1);
            }
            
            .modal.bottom-sheet
            {
                top: auto;
                bottom: -100%;
            
                width: 100%;
                max-height: 45%;
                margin: 0;
            
                border-radius: 0;
            
                will-change: bottom, opacity;
            }
            
            .collapsible
            {
                margin: .5rem 0 1rem 0;
            
                border-top: 1px solid #ddd;
                border-right: 1px solid #ddd;
                border-left: 1px solid #ddd;
            }
            
            .collapsible-header
            {
                line-height: 1.5;
            
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                padding: 1rem;
            
                cursor: pointer;
            
                border-bottom: 1px solid #ddd;
                background-color: #fff;
            
                -webkit-tap-highlight-color: transparent;
            }
            .collapsible-header:focus
            {
                outline: 0;
            }
            .collapsible-header i
            {
                font-size: 1.6rem;
            
                display: inline-block;
            
                width: 2rem;
                margin-right: 1rem;
            
                text-align: center;
            }
            
            .keyboard-focused .collapsible-header:focus
            {
                background-color: #eee;
            }
            
            .collapsible-body
            {
                display: none;
            
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                padding: 2rem;
            
                border-bottom: 1px solid #ddd;
            }
            
            .sidenav .collapsible,
            .sidenav.fixed .collapsible
            {
                border: none;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .sidenav .collapsible li,
            .sidenav.fixed .collapsible li
            {
                padding: 0;
            }
            
            .sidenav .collapsible-header,
            .sidenav.fixed .collapsible-header
            {
                line-height: inherit;
            
                height: inherit;
                padding: 0 16px;
            
                border: none;
                background-color: transparent;
            }
            .sidenav .collapsible-header:hover,
            .sidenav.fixed .collapsible-header:hover
            {
                background-color: rgba(0, 0, 0, .05);
            }
            .sidenav .collapsible-header i,
            .sidenav.fixed .collapsible-header i
            {
                line-height: inherit;
            }
            
            .sidenav .collapsible-body,
            .sidenav.fixed .collapsible-body
            {
                border: 0;
                background-color: #fff;
            }
            .sidenav .collapsible-body li a,
            .sidenav.fixed .collapsible-body li a
            {
                padding: 0 23.5px 0 31px;
            }
            
            .collapsible.popout
            {
                border: none;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .collapsible.popout > li
            {
                margin: 0 24px;
            
                -webkit-transition: margin .35s cubic-bezier(.25, .46, .45, .94);
                   -moz-transition: margin .35s cubic-bezier(.25, .46, .45, .94);
                     -o-transition: margin .35s cubic-bezier(.25, .46, .45, .94);
                        transition: margin .35s cubic-bezier(.25, .46, .45, .94);
            
                -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
                        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
            }
            .collapsible.popout > li.active
            {
                margin: 16px 0;
            
                -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15);
                        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15);
            }
            
            .chip
            {
                font-size: 13px;
                font-weight: 500;
                line-height: 32px;
            
                display: inline-block;
            
                height: 32px;
                margin-right: 5px;
                margin-bottom: 5px;
                padding: 0 12px;
            
                color: rgba(0, 0, 0, .6);
                border-radius: 16px;
                background-color: #e4e4e4;
            }
            .chip:focus
            {
                color: #fff;
                outline: none;
                background-color: #26a69a;
            }
            .chip > img
            {
                float: left;
            
                width: 32px;
                height: 32px;
                margin: 0 8px 0 -12px;
            
                border-radius: 50%;
            }
            .chip .close
            {
                font-size: 16px;
                line-height: 32px;
            
                float: right;
            
                padding-left: 8px;
            
                cursor: pointer;
            }
            
            .chips
            {
                min-height: 45px;
                margin: 0 0 8px 0;
            
                -webkit-transition: all .3s;
                   -moz-transition: all .3s;
                     -o-transition: all .3s;
                        transition: all .3s;
            
                border: none;
                border-bottom: 1px solid #9e9e9e;
                outline: none;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .chips.focus
            {
                border-bottom: 1px solid #26a69a;
                -webkit-box-shadow: 0 1px 0 0 #26a69a;
                        box-shadow: 0 1px 0 0 #26a69a;
            }
            .chips:hover
            {
                cursor: text;
            }
            .chips .input
            {
                font-size: 1rem;
                line-height: 32px;
            
                display: inline-block;
            
                width: 120px !important;
                height: 3rem;
                margin: 0;
                padding: 0 !important;
            
                color: rgba(0, 0, 0, .6);
                border: 0;
                outline: 0;
                background: none;
            }
            .chips .input:focus
            {
                border: 0 !important;
                -webkit-box-shadow: none !important;
                        box-shadow: none !important;
            }
            .chips .autocomplete-content
            {
                margin-top: 0;
                margin-bottom: 0;
            }
            
            .prefix ~ .chips
            {
                width: 92%;
                width: -webkit-calc(100% - 3rem);
                width:    -moz-calc(100% - 3rem);
                width:         calc(100% - 3rem);
                margin-left: 3rem;
            }
            
            .chips:empty ~ label
            {
                font-size: .8rem;
            
                -webkit-transform: translateY(-140%);
                   -moz-transform: translateY(-140%);
                    -ms-transform: translateY(-140%);
                     -o-transform: translateY(-140%);
                        transform: translateY(-140%);
            }
            
            .materialboxed
            {
                position: relative;
            
                display: block;
            
                cursor: -webkit-zoom-in;
                cursor:    -moz-zoom-in;
                cursor:         zoom-in;
                -webkit-transition: opacity .4s;
                   -moz-transition: opacity .4s;
                     -o-transition: opacity .4s;
                        transition: opacity .4s;
            
                -webkit-backface-visibility: hidden;
            }
            .materialboxed:hover:not(.active)
            {
                opacity: .8;
            }
            .materialboxed.active
            {
                cursor: -webkit-zoom-out;
                cursor:    -moz-zoom-out;
                cursor:         zoom-out;
            }
            
            #materialbox-overlay
            {
                position: fixed;
                z-index: 1000;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            
                background-color: #292929;
            
                will-change: opacity;
            }
            
            .materialbox-caption
            {
                line-height: 50px;
            
                position: fixed;
                z-index: 1000;
                bottom: 0;
                left: 0;
            
                display: none;
            
                width: 100%;
                height: 50px;
                padding: 0 15%;
            
                text-align: center;
            
                color: #fff;
            
                -webkit-font-smoothing: antialiased;
            }
            
            select:focus
            {
                outline: 1px solid #c5f8ff;
            }
            
            button:focus
            {
                outline: none;
                background-color: #00cee8;
            }
            
            label
            {
                font-size: .8rem;
            
                color: #9e9e9e;
            }
            
            /* Text Inputs + Textarea
               ========================================================================== */
            /* Style Placeholders */
            ::-webkit-input-placeholder
            {
                color: #d1d1d1;
            }
            ::-moz-placeholder
            {
                color: #d1d1d1;
            }
            ::placeholder
            {
                color: #d1d1d1;
            }
            
            /* Text inputs */
            input:not([type]),
            input[type=text]:not(.browser-default),
            input[type=password]:not(.browser-default),
            input[type=email]:not(.browser-default),
            input[type=url]:not(.browser-default),
            input[type=time]:not(.browser-default),
            input[type=date]:not(.browser-default),
            input[type=datetime]:not(.browser-default),
            input[type=datetime-local]:not(.browser-default),
            input[type=tel]:not(.browser-default),
            input[type=number]:not(.browser-default),
            input[type=search]:not(.browser-default),
            textarea.materialize-textarea
            {
                font-size: 1rem;
            
                -webkit-box-sizing: content-box;
                   -moz-box-sizing: content-box;
                        box-sizing: content-box;
                width: 100%;
                height: 3rem;
                margin: 0 0 8px 0;
                padding: 0;
            
                -webkit-transition: border .3s, -webkit-box-shadow .3s;
                   -moz-transition: box-shadow .3s, border .3s;
                     -o-transition: box-shadow .3s, border .3s;
                        transition: border .3s, -webkit-box-shadow .3s;
                        transition: box-shadow .3s, border .3s;
                        transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
            
                border: none;
                border-bottom: 1px solid #9e9e9e;
                border-radius: 0;
                outline: none;
                background-color: transparent;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            input:not([type]):disabled,
            input:not([type])[readonly='readonly'],
            input[type=text]:not(.browser-default):disabled,
            input[type=text]:not(.browser-default)[readonly='readonly'],
            input[type=password]:not(.browser-default):disabled,
            input[type=password]:not(.browser-default)[readonly='readonly'],
            input[type=email]:not(.browser-default):disabled,
            input[type=email]:not(.browser-default)[readonly='readonly'],
            input[type=url]:not(.browser-default):disabled,
            input[type=url]:not(.browser-default)[readonly='readonly'],
            input[type=time]:not(.browser-default):disabled,
            input[type=time]:not(.browser-default)[readonly='readonly'],
            input[type=date]:not(.browser-default):disabled,
            input[type=date]:not(.browser-default)[readonly='readonly'],
            input[type=datetime]:not(.browser-default):disabled,
            input[type=datetime]:not(.browser-default)[readonly='readonly'],
            input[type=datetime-local]:not(.browser-default):disabled,
            input[type=datetime-local]:not(.browser-default)[readonly='readonly'],
            input[type=tel]:not(.browser-default):disabled,
            input[type=tel]:not(.browser-default)[readonly='readonly'],
            input[type=number]:not(.browser-default):disabled,
            input[type=number]:not(.browser-default)[readonly='readonly'],
            input[type=search]:not(.browser-default):disabled,
            input[type=search]:not(.browser-default)[readonly='readonly'],
            textarea.materialize-textarea:disabled,
            textarea.materialize-textarea[readonly='readonly']
            {
                color: rgba(0, 0, 0, .42);
                border-bottom: 1px dotted rgba(0, 0, 0, .42);
            }
            input:not([type]):disabled + label,
            input:not([type])[readonly='readonly'] + label,
            input[type=text]:not(.browser-default):disabled + label,
            input[type=text]:not(.browser-default)[readonly='readonly'] + label,
            input[type=password]:not(.browser-default):disabled + label,
            input[type=password]:not(.browser-default)[readonly='readonly'] + label,
            input[type=email]:not(.browser-default):disabled + label,
            input[type=email]:not(.browser-default)[readonly='readonly'] + label,
            input[type=url]:not(.browser-default):disabled + label,
            input[type=url]:not(.browser-default)[readonly='readonly'] + label,
            input[type=time]:not(.browser-default):disabled + label,
            input[type=time]:not(.browser-default)[readonly='readonly'] + label,
            input[type=date]:not(.browser-default):disabled + label,
            input[type=date]:not(.browser-default)[readonly='readonly'] + label,
            input[type=datetime]:not(.browser-default):disabled + label,
            input[type=datetime]:not(.browser-default)[readonly='readonly'] + label,
            input[type=datetime-local]:not(.browser-default):disabled + label,
            input[type=datetime-local]:not(.browser-default)[readonly='readonly'] + label,
            input[type=tel]:not(.browser-default):disabled + label,
            input[type=tel]:not(.browser-default)[readonly='readonly'] + label,
            input[type=number]:not(.browser-default):disabled + label,
            input[type=number]:not(.browser-default)[readonly='readonly'] + label,
            input[type=search]:not(.browser-default):disabled + label,
            input[type=search]:not(.browser-default)[readonly='readonly'] + label,
            textarea.materialize-textarea:disabled + label,
            textarea.materialize-textarea[readonly='readonly'] + label
            {
                color: rgba(0, 0, 0, .42);
            }
            input:not([type]):focus:not([readonly]),
            input[type=text]:not(.browser-default):focus:not([readonly]),
            input[type=password]:not(.browser-default):focus:not([readonly]),
            input[type=email]:not(.browser-default):focus:not([readonly]),
            input[type=url]:not(.browser-default):focus:not([readonly]),
            input[type=time]:not(.browser-default):focus:not([readonly]),
            input[type=date]:not(.browser-default):focus:not([readonly]),
            input[type=datetime]:not(.browser-default):focus:not([readonly]),
            input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
            input[type=tel]:not(.browser-default):focus:not([readonly]),
            input[type=number]:not(.browser-default):focus:not([readonly]),
            input[type=search]:not(.browser-default):focus:not([readonly]),
            textarea.materialize-textarea:focus:not([readonly])
            {
                border-bottom: 1px solid #00bcd4;
                -webkit-box-shadow: 0 1px 0 0 #00bcd4;
                        box-shadow: 0 1px 0 0 #00bcd4;
            }
            input:not([type]):focus:not([readonly]) + label,
            input[type=text]:not(.browser-default):focus:not([readonly]) + label,
            input[type=password]:not(.browser-default):focus:not([readonly]) + label,
            input[type=email]:not(.browser-default):focus:not([readonly]) + label,
            input[type=url]:not(.browser-default):focus:not([readonly]) + label,
            input[type=time]:not(.browser-default):focus:not([readonly]) + label,
            input[type=date]:not(.browser-default):focus:not([readonly]) + label,
            input[type=datetime]:not(.browser-default):focus:not([readonly]) + label,
            input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,
            input[type=tel]:not(.browser-default):focus:not([readonly]) + label,
            input[type=number]:not(.browser-default):focus:not([readonly]) + label,
            input[type=search]:not(.browser-default):focus:not([readonly]) + label,
            textarea.materialize-textarea:focus:not([readonly]) + label
            {
                color: #00bcd4;
            }
            input:not([type]):focus.valid ~ label,
            input[type=text]:not(.browser-default):focus.valid ~ label,
            input[type=password]:not(.browser-default):focus.valid ~ label,
            input[type=email]:not(.browser-default):focus.valid ~ label,
            input[type=url]:not(.browser-default):focus.valid ~ label,
            input[type=time]:not(.browser-default):focus.valid ~ label,
            input[type=date]:not(.browser-default):focus.valid ~ label,
            input[type=datetime]:not(.browser-default):focus.valid ~ label,
            input[type=datetime-local]:not(.browser-default):focus.valid ~ label,
            input[type=tel]:not(.browser-default):focus.valid ~ label,
            input[type=number]:not(.browser-default):focus.valid ~ label,
            input[type=search]:not(.browser-default):focus.valid ~ label,
            textarea.materialize-textarea:focus.valid ~ label
            {
                color: #00bfa5;
            }
            input:not([type]):focus.invalid ~ label,
            input[type=text]:not(.browser-default):focus.invalid ~ label,
            input[type=password]:not(.browser-default):focus.invalid ~ label,
            input[type=email]:not(.browser-default):focus.invalid ~ label,
            input[type=url]:not(.browser-default):focus.invalid ~ label,
            input[type=time]:not(.browser-default):focus.invalid ~ label,
            input[type=date]:not(.browser-default):focus.invalid ~ label,
            input[type=datetime]:not(.browser-default):focus.invalid ~ label,
            input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,
            input[type=tel]:not(.browser-default):focus.invalid ~ label,
            input[type=number]:not(.browser-default):focus.invalid ~ label,
            input[type=search]:not(.browser-default):focus.invalid ~ label,
            textarea.materialize-textarea:focus.invalid ~ label
            {
                color: #ff5252;
            }
            input:not([type]).validate + label,
            input[type=text]:not(.browser-default).validate + label,
            input[type=password]:not(.browser-default).validate + label,
            input[type=email]:not(.browser-default).validate + label,
            input[type=url]:not(.browser-default).validate + label,
            input[type=time]:not(.browser-default).validate + label,
            input[type=date]:not(.browser-default).validate + label,
            input[type=datetime]:not(.browser-default).validate + label,
            input[type=datetime-local]:not(.browser-default).validate + label,
            input[type=tel]:not(.browser-default).validate + label,
            input[type=number]:not(.browser-default).validate + label,
            input[type=search]:not(.browser-default).validate + label,
            textarea.materialize-textarea.validate + label
            {
                width: 100%;
            }
            
            /* Validation Sass Placeholders */
            input.valid:not([type]),
            input.valid:not([type]):focus,
            input.valid[type=text]:not(.browser-default),
            input.valid[type=text]:not(.browser-default):focus,
            input.valid[type=password]:not(.browser-default),
            input.valid[type=password]:not(.browser-default):focus,
            input.valid[type=email]:not(.browser-default),
            input.valid[type=email]:not(.browser-default):focus,
            input.valid[type=url]:not(.browser-default),
            input.valid[type=url]:not(.browser-default):focus,
            input.valid[type=time]:not(.browser-default),
            input.valid[type=time]:not(.browser-default):focus,
            input.valid[type=date]:not(.browser-default),
            input.valid[type=date]:not(.browser-default):focus,
            input.valid[type=datetime]:not(.browser-default),
            input.valid[type=datetime]:not(.browser-default):focus,
            input.valid[type=datetime-local]:not(.browser-default),
            input.valid[type=datetime-local]:not(.browser-default):focus,
            input.valid[type=tel]:not(.browser-default),
            input.valid[type=tel]:not(.browser-default):focus,
            input.valid[type=number]:not(.browser-default),
            input.valid[type=number]:not(.browser-default):focus,
            input.valid[type=search]:not(.browser-default),
            input.valid[type=search]:not(.browser-default):focus,
            textarea.materialize-textarea.valid,
            textarea.materialize-textarea.valid:focus,
            .select-wrapper.valid > input.select-dropdown
            {
                border-bottom: 1px solid #00bfa5;
                -webkit-box-shadow: 0 1px 0 0 #00bfa5;
                        box-shadow: 0 1px 0 0 #00bfa5;
            }
            
            input.invalid:not([type]),
            input.invalid:not([type]):focus,
            input.invalid[type=text]:not(.browser-default),
            input.invalid[type=text]:not(.browser-default):focus,
            input.invalid[type=password]:not(.browser-default),
            input.invalid[type=password]:not(.browser-default):focus,
            input.invalid[type=email]:not(.browser-default),
            input.invalid[type=email]:not(.browser-default):focus,
            input.invalid[type=url]:not(.browser-default),
            input.invalid[type=url]:not(.browser-default):focus,
            input.invalid[type=time]:not(.browser-default),
            input.invalid[type=time]:not(.browser-default):focus,
            input.invalid[type=date]:not(.browser-default),
            input.invalid[type=date]:not(.browser-default):focus,
            input.invalid[type=datetime]:not(.browser-default),
            input.invalid[type=datetime]:not(.browser-default):focus,
            input.invalid[type=datetime-local]:not(.browser-default),
            input.invalid[type=datetime-local]:not(.browser-default):focus,
            input.invalid[type=tel]:not(.browser-default),
            input.invalid[type=tel]:not(.browser-default):focus,
            input.invalid[type=number]:not(.browser-default),
            input.invalid[type=number]:not(.browser-default):focus,
            input.invalid[type=search]:not(.browser-default),
            input.invalid[type=search]:not(.browser-default):focus,
            textarea.materialize-textarea.invalid,
            textarea.materialize-textarea.invalid:focus,
            .select-wrapper.invalid > input.select-dropdown,
            .select-wrapper.invalid > input.select-dropdown:focus
            {
                border-bottom: 1px solid #ff5252;
                -webkit-box-shadow: 0 1px 0 0 #ff5252;
                        box-shadow: 0 1px 0 0 #ff5252;
            }
            
            input:not([type]).valid ~ .helper-text[data-success],
            input:not([type]):focus.valid ~ .helper-text[data-success],
            input:not([type]).invalid ~ .helper-text[data-error],
            input:not([type]):focus.invalid ~ .helper-text[data-error],
            input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],
            input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],
            input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],
            input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],
            textarea.materialize-textarea.valid ~ .helper-text[data-success],
            textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],
            textarea.materialize-textarea.invalid ~ .helper-text[data-error],
            textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],
            .select-wrapper.valid .helper-text[data-success],
            .select-wrapper.invalid ~ .helper-text[data-error]
            {
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
                pointer-events: none;
            
                color: transparent;
            }
            
            input:not([type]).valid ~ .helper-text:after,
            input:not([type]):focus.valid ~ .helper-text:after,
            input[type=text]:not(.browser-default).valid ~ .helper-text:after,
            input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=password]:not(.browser-default).valid ~ .helper-text:after,
            input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=email]:not(.browser-default).valid ~ .helper-text:after,
            input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=url]:not(.browser-default).valid ~ .helper-text:after,
            input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=time]:not(.browser-default).valid ~ .helper-text:after,
            input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=date]:not(.browser-default).valid ~ .helper-text:after,
            input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,
            input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,
            input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=tel]:not(.browser-default).valid ~ .helper-text:after,
            input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=number]:not(.browser-default).valid ~ .helper-text:after,
            input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,
            input[type=search]:not(.browser-default).valid ~ .helper-text:after,
            input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,
            textarea.materialize-textarea.valid ~ .helper-text:after,
            textarea.materialize-textarea:focus.valid ~ .helper-text:after,
            .select-wrapper.valid ~ .helper-text:after
            {
                content: attr(data-success);
            
                color: #00bfa5;
            }
            
            input:not([type]).invalid ~ .helper-text:after,
            input:not([type]):focus.invalid ~ .helper-text:after,
            input[type=text]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=password]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=email]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=url]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=time]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=date]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=number]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,
            input[type=search]:not(.browser-default).invalid ~ .helper-text:after,
            input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,
            textarea.materialize-textarea.invalid ~ .helper-text:after,
            textarea.materialize-textarea:focus.invalid ~ .helper-text:after,
            .select-wrapper.invalid ~ .helper-text:after
            {
                content: attr(data-error);
            
                color: #ff5252;
            }
            
            input:not([type]) + label:after,
            input[type=text]:not(.browser-default) + label:after,
            input[type=password]:not(.browser-default) + label:after,
            input[type=email]:not(.browser-default) + label:after,
            input[type=url]:not(.browser-default) + label:after,
            input[type=time]:not(.browser-default) + label:after,
            input[type=date]:not(.browser-default) + label:after,
            input[type=datetime]:not(.browser-default) + label:after,
            input[type=datetime-local]:not(.browser-default) + label:after,
            input[type=tel]:not(.browser-default) + label:after,
            input[type=number]:not(.browser-default) + label:after,
            input[type=search]:not(.browser-default) + label:after,
            textarea.materialize-textarea + label:after,
            .select-wrapper + label:after
            {
                position: absolute;
                top: 100%;
                left: 0;
            
                display: block;
            
                content: '';
                -webkit-transition: .2s opacity ease-out, .2s color ease-out;
                   -moz-transition: .2s opacity ease-out, .2s color ease-out;
                     -o-transition: .2s opacity ease-out, .2s color ease-out;
                        transition: .2s opacity ease-out, .2s color ease-out;
            
                opacity: 0;
            }
            
            .input-field
            {
                position: relative;
            
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            .input-field.inline
            {
                display: inline-block;
            
                margin-left: 5px;
            
                vertical-align: middle;
            }
            .input-field.inline input,
            .input-field.inline .select-dropdown
            {
                margin-bottom: 1rem;
            }
            .input-field.col label
            {
                left: .75rem;
            }
            .input-field.col .prefix ~ label,
            .input-field.col .prefix ~ .validate ~ label
            {
                width: -webkit-calc(100% - 3rem - 1.5rem);
                width:    -moz-calc(100% - 3rem - 1.5rem);
                width:         calc(100% - 3rem - 1.5rem);
            }
            .input-field > label
            {
                font-size: 1rem;
            
                position: absolute;
                top: 0;
                left: 0;
            
                cursor: text;
                -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;
                   -moz-transition: transform .2s ease-out, color .2s ease-out, -moz-transform .2s ease-out;
                     -o-transition: color .2s ease-out, -o-transform .2s ease-out;
                        transition: color .2s ease-out, -webkit-transform .2s ease-out;
                        transition: transform .2s ease-out, color .2s ease-out;
                        transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out, -moz-transform .2s ease-out, -o-transform .2s ease-out;
                -webkit-transform: translateY(12px);
                   -moz-transform: translateY(12px);
                    -ms-transform: translateY(12px);
                     -o-transform: translateY(12px);
                        transform: translateY(12px);
                -webkit-transform-origin: 0 100%;
                   -moz-transform-origin: 0 100%;
                    -ms-transform-origin: 0 100%;
                     -o-transform-origin: 0 100%;
                        transform-origin: 0 100%;
                text-align: initial;
            
                color: #9e9e9e;
            }
            .input-field > label:not(.label-icon).active
            {
                -webkit-transform: translateY(-14px) scale(.8);
                   -moz-transform: translateY(-14px) scale(.8);
                    -ms-transform: translateY(-14px) scale(.8);
                     -o-transform: translateY(-14px) scale(.8);
                        transform: translateY(-14px) scale(.8);
                -webkit-transform-origin: 0 0;
                   -moz-transform-origin: 0 0;
                    -ms-transform-origin: 0 0;
                     -o-transform-origin: 0 0;
                        transform-origin: 0 0;
            }
            .input-field > input[type]:-webkit-autofill:not(.browser-default) + label,
            .input-field > input[type=date]:not(.browser-default) + label,
            .input-field > input[type=time]:not(.browser-default) + label
            {
                -webkit-transform: translateY(-14px) scale(.8);
                        transform: translateY(-14px) scale(.8);
                -webkit-transform-origin: 0 0;
                        transform-origin: 0 0;
            }
            .input-field .helper-text
            {
                font-size: 12px;
            
                position: relative;
            
                display: block;
            
                min-height: 18px;
            
                color: rgba(0, 0, 0, .54);
            }
            .input-field .helper-text::after
            {
                position: absolute;
                top: 0;
                left: 0;
            
                opacity: 1;
            }
            .input-field .prefix
            {
                font-size: 2rem;
            
                position: absolute;
                top: .5rem;
            
                width: 3rem;
            
                -webkit-transition: color .2s;
                   -moz-transition: color .2s;
                     -o-transition: color .2s;
                        transition: color .2s;
            }
            .input-field .prefix.active
            {
                color: #00bcd4;
            }
            .input-field .prefix ~ input,
            .input-field .prefix ~ textarea,
            .input-field .prefix ~ label,
            .input-field .prefix ~ .validate ~ label,
            .input-field .prefix ~ .helper-text,
            .input-field .prefix ~ .autocomplete-content
            {
                width: 92%;
                width: -webkit-calc(100% - 3rem);
                width:    -moz-calc(100% - 3rem);
                width:         calc(100% - 3rem);
                margin-left: 3rem;
            }
            .input-field .prefix ~ label
            {
                margin-left: 3rem;
            }
            @media only screen and (max-width: 992px)
            {
                .input-field .prefix ~ input
                {
                    width: 86%;
                    width: -webkit-calc(100% - 3rem);
                    width:    -moz-calc(100% - 3rem);
                    width:         calc(100% - 3rem);
                }
            }
            @media only screen and (max-width: 600px)
            {
                .input-field .prefix ~ input
                {
                    width: 80%;
                    width: -webkit-calc(100% - 3rem);
                    width:    -moz-calc(100% - 3rem);
                    width:         calc(100% - 3rem);
                }
            }
            
            /* Search Field */
            .input-field input[type=search]
            {
                line-height: inherit;
            
                display: block;
            
                -webkit-transition: .3s background-color;
                   -moz-transition: .3s background-color;
                     -o-transition: .3s background-color;
                        transition: .3s background-color;
            }
            .nav-wrapper .input-field input[type=search]
            {
                width: -webkit-calc(100% - 4rem);
                width:    -moz-calc(100% - 4rem);
                width:         calc(100% - 4rem);
                height: inherit;
                padding-left: 4rem;
            
                border: 0;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .input-field input[type=search]:focus:not(.browser-default)
            {
                color: #444;
                border: 0;
                background-color: #fff;
                -webkit-box-shadow: none;
                        box-shadow: none;
            }
            .input-field input[type=search]:focus:not(.browser-default) + label i,
            .input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,
            .input-field input[type=search]:focus:not(.browser-default) ~ .material-icons
            {
                color: #444;
            }
            .input-field input[type=search] + .label-icon
            {
                left: 1rem;
            
                -webkit-transform: none;
                   -moz-transform: none;
                    -ms-transform: none;
                     -o-transform: none;
                        transform: none;
            }
            .input-field input[type=search] ~ .mdi-navigation-close,
            .input-field input[type=search] ~ .material-icons
            {
                font-size: 2rem;
            
                position: absolute;
                top: 0;
                right: 1rem;
            
                cursor: pointer;
                -webkit-transition: .3s color;
                   -moz-transition: .3s color;
                     -o-transition: .3s color;
                        transition: .3s color;
            
                color: transparent;
            }
            
            /* Textarea */
            textarea
            {
                width: 100%;
                height: 3rem;
            
                background-color: transparent;
            }
            textarea.materialize-textarea
            {
                line-height: normal;
            
                overflow-y: hidden;
            
                -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box;
                        box-sizing: border-box;
                min-height:130px;
                /* prevents scroll bar flash */
                padding: .8rem 0 .8rem 0;
                /* prevents text jump on Enter keypress */
            
                resize: none;
            }
            
            .hiddendiv
            {
                /* prevents text jump on Enter keypress */
                position: absolute;
                z-index: -1;
                top: 0;
            
                visibility: hidden;
                /* future version of deprecated 'word-wrap' */
            
                padding-top: 1.2rem;
            
                white-space: pre-wrap;
                word-wrap: break-word;
            
                overflow-wrap: break-word;
            }
            
            /* Autocomplete */
            .autocomplete-content li .highlight
            {
                color: #444;
            }
            
            .autocomplete-content li img
            {
                width: 40px;
                height: 40px;
                margin: 5px 15px;
            }
            
            /* Character Counter */
            .character-counter
            {
                min-height: 18px;
            }
            
            /* Radio Buttons
               ========================================================================== */
            [type='radio']:not(:checked),
            [type='radio']:checked
            {
                position: absolute;
            
                pointer-events: none;
            
                opacity: 0;
            }
            
            [type='radio']:not(:checked) + span,
            [type='radio']:checked + span
            {
                font-size: 1rem;
                line-height: 25px;
            
                position: relative;
            
                display: inline-block;
            
                height: 25px;
                padding-left: 35px;
            
                cursor: pointer;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
                -webkit-transition: .28s ease;
                   -moz-transition: .28s ease;
                     -o-transition: .28s ease;
                        transition: .28s ease;
            }
            
            [type='radio'] + span:before,
            [type='radio'] + span:after
            {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 0;
            
                width: 16px;
                height: 16px;
                margin: 4px;
            
                content: '';
                -webkit-transition: .28s ease;
                   -moz-transition: .28s ease;
                     -o-transition: .28s ease;
                        transition: .28s ease;
            }
            
            /* Unchecked styles */
            [type='radio']:not(:checked) + span:before,
            [type='radio']:not(:checked) + span:after,
            [type='radio']:checked + span:before,
            [type='radio']:checked + span:after,
            [type='radio'].with-gap:checked + span:before,
            [type='radio'].with-gap:checked + span:after
            {
                border-radius: 50%;
            }
            
            [type='radio']:not(:checked) + span:before,
            [type='radio']:not(:checked) + span:after
            {
                border: 2px solid #5a5a5a;
            }
            
            [type='radio']:not(:checked) + span:after
            {
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            }
            
            /* Checked styles */
            [type='radio']:checked + span:before
            {
                border: 2px solid transparent;
            }
            
            [type='radio']:checked + span:after,
            [type='radio'].with-gap:checked + span:before,
            [type='radio'].with-gap:checked + span:after
            {
                border: 2px solid #00bcd4;
            }
            
            [type='radio']:checked + span:after,
            [type='radio'].with-gap:checked + span:after
            {
                background-color: #00bcd4;
            }
            
            [type='radio']:checked + span:after
            {
                -webkit-transform: scale(1.02);
                   -moz-transform: scale(1.02);
                    -ms-transform: scale(1.02);
                     -o-transform: scale(1.02);
                        transform: scale(1.02);
            }
            
            /* Radio With gap */
            [type='radio'].with-gap:checked + span:after
            {
                -webkit-transform: scale(.5);
                   -moz-transform: scale(.5);
                    -ms-transform: scale(.5);
                     -o-transform: scale(.5);
                        transform: scale(.5);
            }
            
            /* Focused styles */
            [type='radio'].tabbed:focus + span:before
            {
                -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);
                        box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);
            }
            
            /* Disabled Radio With gap */
            [type='radio'].with-gap:disabled:checked + span:before
            {
                border: 2px solid rgba(0, 0, 0, .42);
            }
            
            [type='radio'].with-gap:disabled:checked + span:after
            {
                border: none;
                background-color: rgba(0, 0, 0, .42);
            }
            
            /* Disabled style */
            [type='radio']:disabled:not(:checked) + span:before,
            [type='radio']:disabled:checked + span:before
            {
                border-color: rgba(0, 0, 0, .42);
                background-color: transparent;
            }
            
            [type='radio']:disabled + span
            {
                color: rgba(0, 0, 0, .42);
            }
            
            [type='radio']:disabled:not(:checked) + span:before
            {
                border-color: rgba(0, 0, 0, .42);
            }
            
            [type='radio']:disabled:checked + span:after
            {
                border-color: #949494;
                background-color: rgba(0, 0, 0, .42);
            }
            
            /* Checkboxes
               ========================================================================== */
            /* Remove default checkbox */
            [type='checkbox']:not(:checked),
            [type='checkbox']:checked
            {
                position: absolute;
            
                pointer-events: none;
            
                opacity: 0;
            }
            
            [type='checkbox']
            {
                /* checkbox aspect */
            }
            [type='checkbox'] + span:not(.lever)
            {
                font-size: 1rem;
                line-height: 25px;
            
                position: relative;
            
                display: inline-block;
            
                height: 25px;
                padding-left: 35px;
            
                cursor: pointer;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            }
            [type='checkbox'] + span:not(.lever):before,
            [type='checkbox']:not(.filled-in) + span:not(.lever):after
            {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 0;
            
                width: 18px;
                height: 18px;
                margin-top: 3px;
            
                content: '';
                -webkit-transition: .2s;
                   -moz-transition: .2s;
                     -o-transition: .2s;
                        transition: .2s;
            
                border: 2px solid #5a5a5a;
                border-radius: 1px;
            }
            [type='checkbox']:not(.filled-in) + span:not(.lever):after
            {
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            
                border: 0;
            }
            [type='checkbox']:not(:checked):disabled + span:not(.lever):before
            {
                border: none;
                background-color: rgba(0, 0, 0, .42);
            }
            [type='checkbox'].tabbed:focus + span:not(.lever):after
            {
                -webkit-transform: scale(1);
                   -moz-transform: scale(1);
                    -ms-transform: scale(1);
                     -o-transform: scale(1);
                        transform: scale(1);
            
                border: 0;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, .1);
                -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);
                        box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);
            }
            
            [type='checkbox']:checked + span:not(.lever):before
            {
                top: -4px;
                left: -5px;
            
                width: 12px;
                height: 22px;
            
                -webkit-transform: rotate(40deg);
                   -moz-transform: rotate(40deg);
                    -ms-transform: rotate(40deg);
                     -o-transform: rotate(40deg);
                        transform: rotate(40deg);
                -webkit-transform-origin: 100% 100%;
                   -moz-transform-origin: 100% 100%;
                    -ms-transform-origin: 100% 100%;
                     -o-transform-origin: 100% 100%;
                        transform-origin: 100% 100%;
            
                border-top: 2px solid transparent;
                border-right: 2px solid #00bcd4;
                border-bottom: 2px solid #00bcd4;
                border-left: 2px solid transparent;
            
                -webkit-backface-visibility: hidden;
                   -moz-backface-visibility: hidden;
                        backface-visibility: hidden;
            }
            
            [type='checkbox']:checked:disabled + span:before
            {
                border-right: 2px solid rgba(0, 0, 0, .42);
                border-bottom: 2px solid rgba(0, 0, 0, .42);
            }
            
            /* Indeterminate checkbox */
            [type='checkbox']:indeterminate + span:not(.lever):before
            {
                top: -11px;
                left: -12px;
            
                width: 10px;
                height: 22px;
            
                -webkit-transform: rotate(90deg);
                   -moz-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                     -o-transform: rotate(90deg);
                        transform: rotate(90deg);
                -webkit-transform-origin: 100% 100%;
                   -moz-transform-origin: 100% 100%;
                    -ms-transform-origin: 100% 100%;
                     -o-transform-origin: 100% 100%;
                        transform-origin: 100% 100%;
            
                border-top: none;
                border-right: 2px solid #00bcd4;
                border-bottom: none;
                border-left: none;
            
                -webkit-backface-visibility: hidden;
                   -moz-backface-visibility: hidden;
                        backface-visibility: hidden;
            }
            
            [type='checkbox']:indeterminate:disabled + span:not(.lever):before
            {
                border-right: 2px solid rgba(0, 0, 0, .42);
                background-color: transparent;
            }
            
            [type='checkbox'].filled-in + span:not(.lever):after
            {
                border-radius: 2px;
            }
            
            [type='checkbox'].filled-in + span:not(.lever):before,
            [type='checkbox'].filled-in + span:not(.lever):after
            {
                position: absolute;
                z-index: 1;
                left: 0;
            
                content: '';
                /* .1s delay is for check animation */
                -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
                   -moz-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
                     -o-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
                        transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
            }
            
            [type='checkbox'].filled-in:not(:checked) + span:not(.lever):before
            {
                top: 10px;
                left: 6px;
            
                width: 0;
                height: 0;
            
                -webkit-transform: rotateZ(37deg);
                   -moz-transform: rotateZ(37deg);
                    -ms-transform: rotate(37deg);
                     -o-transform: rotateZ(37deg);
                        transform: rotateZ(37deg);
                -webkit-transform-origin: 100% 100%;
                   -moz-transform-origin: 100% 100%;
                    -ms-transform-origin: 100% 100%;
                     -o-transform-origin: 100% 100%;
                        transform-origin: 100% 100%;
            
                border: 3px solid transparent;
            }
            
            [type='checkbox'].filled-in:not(:checked) + span:not(.lever):after
            {
                z-index: 0;
                top: 0;
            
                width: 20px;
                height: 20px;
            
                border: 2px solid #5a5a5a;
                background-color: transparent;
            }
            
            [type='checkbox'].filled-in:checked + span:not(.lever):before
            {
                top: 0;
                left: 1px;
            
                width: 8px;
                height: 13px;
            
                -webkit-transform: rotateZ(37deg);
                   -moz-transform: rotateZ(37deg);
                    -ms-transform: rotate(37deg);
                     -o-transform: rotateZ(37deg);
                        transform: rotateZ(37deg);
                -webkit-transform-origin: 100% 100%;
                   -moz-transform-origin: 100% 100%;
                    -ms-transform-origin: 100% 100%;
                     -o-transform-origin: 100% 100%;
                        transform-origin: 100% 100%;
            
                border-top: 2px solid transparent;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
                border-left: 2px solid transparent;
            }
            
            [type='checkbox'].filled-in:checked + span:not(.lever):after
            {
                z-index: 0;
                top: 0;
            
                width: 20px;
                height: 20px;
            
                border: 2px solid #00bcd4;
                background-color: #00bcd4;
            }
            
            [type='checkbox'].filled-in.tabbed:focus + span:not(.lever):after
            {
                border-color: #5a5a5a;
                border-radius: 2px;
                background-color: rgba(0, 0, 0, .1);
            }
            
            [type='checkbox'].filled-in.tabbed:checked:focus + span:not(.lever):after
            {
                border-color: #00bcd4;
                border-radius: 2px;
                background-color: #00bcd4;
            }
            
            [type='checkbox'].filled-in:disabled:not(:checked) + span:not(.lever):before
            {
                border: 2px solid transparent;
                background-color: transparent;
            }
            
            [type='checkbox'].filled-in:disabled:not(:checked) + span:not(.lever):after
            {
                border-color: transparent;
                background-color: #949494;
            }
            
            [type='checkbox'].filled-in:disabled:checked + span:not(.lever):before
            {
                background-color: transparent;
            }
            
            [type='checkbox'].filled-in:disabled:checked + span:not(.lever):after
            {
                border-color: #949494;
                background-color: #949494;
            }
            
            /* Switch
               ========================================================================== */
            .switch,
            .switch *
            {
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            
                -webkit-tap-highlight-color: transparent;
            }
            
            .switch label
            {
                cursor: pointer;
            }
            
            .switch label input[type=checkbox]
            {
                width: 0;
                height: 0;
            
                opacity: 0;
            }
            .switch label input[type=checkbox]:checked + .lever
            {
                background-color: #9b75cc;
            }
            .switch label input[type=checkbox]:checked + .lever:before,
            .switch label input[type=checkbox]:checked + .lever:after
            {
                left: 18px;
            }
            .switch label input[type=checkbox]:checked + .lever:after
            {
                background-color:#9b75cc;
            }
            
            .switch label .lever
            {
                position: relative;
            
                display: inline-block;
            
                width: 36px;
                height: 14px;
                margin: 0 16px;
                margin-right: 10px;
            
                content: '';
                -webkit-transition: background .3s ease;
                   -moz-transition: background .3s ease;
                     -o-transition: background .3s ease;
                        transition: background .3s ease;
                vertical-align: middle;
            
                border-radius: 15px;
                background-color: rgba(0, 0, 0, .38);
            }
            .switch label .lever:before,
            .switch label .lever:after
            {
                position: absolute;
                top: -3px;
                left: 0;
            
                display: inline-block;
            
                width: 20px;
                height: 20px;
            
                content: '';
                -webkit-transition: left .3s ease, background .3s ease, -webkit-box-shadow .1s ease, -webkit-transform .1s ease;
                   -moz-transition: left .3s ease, background .3s ease, box-shadow .1s ease, transform .1s ease, -moz-transform .1s ease;
                     -o-transition: left .3s ease, background .3s ease, box-shadow .1s ease, -o-transform .1s ease;
                        transition: left .3s ease, background .3s ease, -webkit-box-shadow .1s ease, -webkit-transform .1s ease;
                        transition: left .3s ease, background .3s ease, box-shadow .1s ease, transform .1s ease;
                        transition: left .3s ease, background .3s ease, box-shadow .1s ease, transform .1s ease, -webkit-box-shadow .1s ease, -webkit-transform .1s ease, -moz-transform .1s ease, -o-transform .1s ease;
            
                border-radius: 50%;
            }
            .switch label .lever:before
            {
                background-color: rgba(0, 188, 212, .15);
            }
            .switch label .lever:after
            {
                background-color: #f1f1f1;
                -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
                        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
            }
            
            input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,
            input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before
            {
                -webkit-transform: scale(2.4);
                   -moz-transform: scale(2.4);
                    -ms-transform: scale(2.4);
                     -o-transform: scale(2.4);
                        transform: scale(2.4);
            
                background-color: rgba(0, 188, 212, .15);
            }
            
            input[type=checkbox]:not(:disabled) ~ .lever:active:before,
            input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before
            {
                -webkit-transform: scale(2.4);
                   -moz-transform: scale(2.4);
                    -ms-transform: scale(2.4);
                     -o-transform: scale(2.4);
                        transform: scale(2.4);
            
                background-color: rgba(0, 0, 0, .08);
            }
            
            .switch input[type=checkbox][disabled] + .lever
            {
                cursor: default;
            
                background-color: rgba(0, 0, 0, .12);
            }
            
            .switch label input[type=checkbox][disabled] + .lever:after,
            .switch label input[type=checkbox][disabled]:checked + .lever:after
            {
                background-color: #949494;
            }
            
            /* Select Field
               ========================================================================== */
            select
            {
                display: none;
            }
            
            select.browser-default
            {
                display: block;
            }
            
            select
            {
                width: 100%;
                height: 3rem;
                padding: 5px;
            
                border: 1px solid #f2f2f2;
                border-radius: 2px;
                background-color: rgba(255, 255, 255, .9);
            }
            
            .select-label
            {
                position: absolute;
            }
            
            .select-wrapper
            {
                position: relative;
            }
            .select-wrapper.valid + label,
            .select-wrapper.invalid + label
            {
                width: 100%;
            
                pointer-events: none;
            }
            .select-wrapper input.select-dropdown
            {
                font-size: 1rem;
                line-height: 3rem;
            
                position: relative;
                z-index: 1;
            
                display: block;
            
                width: 100%;
                height: 3rem;
                margin: 0 0 8px 0;
                padding: 0;
            
                cursor: pointer;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            
                border: none;
                border-bottom: 1px solid #9e9e9e;
                outline: none;
                background-color: transparent;
            }
            .select-wrapper input.select-dropdown:focus
            {
                border-bottom: 1px solid #00bcd4;
            }
            .select-wrapper .caret
            {
                position: absolute;
                z-index: 0;
                top: 0;
                right: 0;
                bottom: 0;
            
                margin: auto 0;
            
                fill: rgba(0, 0, 0, .87);
            }
            .select-wrapper + label
            {
                font-size: .8rem;
            
                position: absolute;
                top: -26px;
            }
            
            select:disabled
            {
                color: rgba(0, 0, 0, .42);
            }
            
            .select-wrapper.disabled + label
            {
                color: rgba(0, 0, 0, .42);
            }
            
            .select-wrapper.disabled .caret
            {
                fill: rgba(0, 0, 0, .42);
            }
            
            .select-wrapper input.select-dropdown:disabled
            {
                cursor: default;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            
                color: rgba(0, 0, 0, .42);
            }
            
            .select-wrapper i
            {
                color: rgba(0, 0, 0, .3);
            }
            
            .select-dropdown li.disabled,
            .select-dropdown li.disabled > span,
            .select-dropdown li.optgroup
            {
                color: rgba(0, 0, 0, .3);
                background-color: transparent;
            }
            
            body.keyboard-focused .select-dropdown.dropdown-content li:focus
            {
                background-color: rgba(0, 0, 0, .08);
            }
            
            .select-dropdown.dropdown-content li:hover
            {
                background-color: rgba(0, 0, 0, .08);
            }
            
            .select-dropdown.dropdown-content li.selected
            {
                background-color: rgba(0, 0, 0, .03);
            }
            
            .prefix ~ .select-wrapper
            {
                width: 92%;
                width: -webkit-calc(100% - 3rem);
                width:    -moz-calc(100% - 3rem);
                width:         calc(100% - 3rem);
                margin-left: 3rem;
            }
            
            .prefix ~ label
            {
                margin-left: 3rem;
            }
            
            .select-dropdown li img
            {
                float: right;
            
                width: 40px;
                height: 40px;
                margin: 5px 15px;
            }
            
            .select-dropdown li.optgroup
            {
                border-top: 1px solid #eee;
            }
            .select-dropdown li.optgroup.selected > span
            {
                color: rgba(0, 0, 0, .7);
            }
            .select-dropdown li.optgroup > span
            {
                color: rgba(0, 0, 0, .4);
            }
            .select-dropdown li.optgroup ~ li.optgroup-option
            {
                padding-left: 1rem;
            }
            
            /* File Input
               ========================================================================== */
            .file-field
            {
                position: relative;
            }
            .file-field .file-path-wrapper
            {
                overflow: hidden;
            
                padding-left: 10px;
            }
            .file-field input.file-path
            {
                width: 100%;
            }
            .file-field .btn,
            .file-field .btn-large,
            .file-field .btn-small
            {
                line-height: 3rem;
            
                float: left;
            
                height: 3rem;
            }
            .file-field span
            {
                cursor: pointer;
            }
            .file-field input[type=file]
            {
                font-size: 20px;
            
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            
                width: 100%;
                margin: 0;
                padding: 0;
            
                cursor: pointer;
            
                opacity: 0;
            
                filter: alpha(opacity=0);
            }
            .file-field input[type=file]::-webkit-file-upload-button
            {
                display: none;
            }
            
            /* Range
               ========================================================================== */
            .range-field
            {
                position: relative;
            }
            
            input[type=range],
            input[type=range] + .thumb
            {
                cursor: pointer;
            }
            
            input[type=range]
            {
                position: relative;
            
                width: 100%;
                margin: 15px 0;
                padding: 0;
            
                border: none;
                outline: none;
                background-color: transparent;
            }
            input[type=range]:focus
            {
                outline: none;
            }
            
            input[type=range] + .thumb
            {
                position: absolute;
                top: 10px;
                left: 0;
            
                width: 0;
                height: 0;
                margin-left: 7px;
            
                -webkit-transform: rotate(-45deg);
                   -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                     -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                -webkit-transform-origin: 50% 50%;
                   -moz-transform-origin: 50% 50%;
                    -ms-transform-origin: 50% 50%;
                     -o-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
            
                border: none;
                border-radius: 50%;
                background-color: #00bcd4;
            }
            input[type=range] + .thumb .value
            {
                font-size: 0;
            
                display: block;
            
                width: 30px;
            
                -webkit-transform: rotate(45deg);
                   -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                     -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                text-align: center;
            
                color: #00bcd4;
            }
            input[type=range] + .thumb.active
            {
                border-radius: 50% 50% 50% 0;
            }
            input[type=range] + .thumb.active .value
            {
                font-size: 10px;
            
                margin-top: 8px;
                margin-left: -1px;
            
                color: #fff;
            }
            
            input[type=range]
            {
                -webkit-appearance: none;
            }
            
            input[type=range]::-webkit-slider-runnable-track
            {
                height: 3px;
            
                border: none;
                background: #c2c0c2;
            }
            
            input[type=range]::-webkit-slider-thumb
            {
                width: 14px;
                height: 14px;
                margin: -5px 0 0 0;
            
                -webkit-transition: -webkit-box-shadow .3s;
                   -moz-transition:         box-shadow .3s;
                     -o-transition:         box-shadow .3s;
                        transition: -webkit-box-shadow .3s;
                        transition:         box-shadow .3s;
                        transition:         box-shadow .3s, -webkit-box-shadow .3s;
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
            
                border: none;
                border-radius: 50%;
                background: #00bcd4;
                background-color: #00bcd4;
            
                -webkit-appearance: none;
            }
            
            .keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb
            {
                -webkit-box-shadow: 0 0 0 10px rgba(0, 188, 212, .26);
                        box-shadow: 0 0 0 10px rgba(0, 188, 212, .26);
            }
            
            input[type=range]
            {
                /* fix for FF unable to apply focus style bug  */
                border: 1px solid white;
                /*required for proper track sizing in FF*/
            }
            
            input[type=range]::-moz-range-track
            {
                height: 3px;
            
                border: none;
                background: #c2c0c2;
            }
            
            input[type=range]::-moz-focus-inner
            {
                border: 0;
            }
            
            input[type=range]::-moz-range-thumb
            {
                width: 14px;
                height: 14px;
                margin-top: -5px;
            
                -webkit-transition: -webkit-box-shadow .3s;
                   -moz-transition:         box-shadow .3s;
                     -o-transition:         box-shadow .3s;
                        transition: -webkit-box-shadow .3s;
                        transition:         box-shadow .3s;
                        transition:         box-shadow .3s, -webkit-box-shadow .3s;
            
                border: none;
                border-radius: 50%;
                background: #00bcd4;
            }
            
            input[type=range]:-moz-focusring
            {
                outline: 1px solid #fff;
                outline-offset: -1px;
            }
            
            .keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb
            {
                box-shadow: 0 0 0 10px rgba(0, 188, 212, .26);
            }
            
            input[type=range]::-ms-track
            {
                height: 3px;
                /*remove default tick marks*/
            
                color: transparent;
                border-width: 6px 0;
                border-color: transparent;
                background: transparent;
            }
            
            input[type=range]::-ms-fill-lower
            {
                background: #777;
            }
            
            input[type=range]::-ms-fill-upper
            {
                background: #ddd;
            }
            
            input[type=range]::-ms-thumb
            {
                width: 14px;
                height: 14px;
            
                -webkit-transition: -webkit-box-shadow .3s;
                   -moz-transition:         box-shadow .3s;
                     -o-transition:         box-shadow .3s;
                        transition: -webkit-box-shadow .3s;
                        transition:         box-shadow .3s;
                        transition:         box-shadow .3s, -webkit-box-shadow .3s;
            
                border: none;
                border-radius: 50%;
                background: #00bcd4;
            }
            
            .keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb
            {
                box-shadow: 0 0 0 10px rgba(0, 188, 212, .26);
            }
            
            /***************
                Nav List
            ***************/
            .table-of-contents.fixed
            {
                position: fixed;
            }
            
            .table-of-contents li
            {
                padding: 2px 0;
            }
            
            .table-of-contents a
            {
                font-weight: 300;
                line-height: 1.5rem;
            
                display: inline-block;
                display: inline-block;
            
                height: 1.5rem;
                padding-left: 16px;
            
                letter-spacing: .4;
            
                color: #757575;
            }
            .table-of-contents a:hover
            {
                padding-left: 15px;
            
                color: #a8a8a8;
                border-left: 1px solid #9c27b0;
            }
            .table-of-contents a.active
            {
                font-weight: 500;
            
                padding-left: 14px;
            
                border-left: 2px solid #9c27b0;
            }
            
            .sidenav
            {
                position: fixed;
                z-index: 999;
                top: 0;
                left: 0;
            
                overflow-y: auto;
            
                width: 250px;
                height: 100%;
                height: -webkit-calc(100% + 60px);
                height:    -moz-calc(100% + 60px);
                height:         calc(100% + 60px);
                height:    -moz-calc(100%);
                margin: 0;
                padding-bottom: 60px;
            
                -webkit-transform: translateX(-100%);
                -webkit-transform: translateX(-105%);
                   -moz-transform: translateX(-100%);
                   -moz-transform: translateX(-105%);
                    -ms-transform: translateX(-100%);
                    -ms-transform: translateX(-105%);
                     -o-transform: translateX(-100%);
                     -o-transform: translateX(-105%);
                        transform: translateX(-100%);
                        transform: translateX(-105%);
            
                background-color: #fff;
            
                will-change: transform;
                -webkit-backface-visibility: hidden;
                   -moz-backface-visibility: hidden;
                        backface-visibility: hidden;
            }
            @media only screen and (min-width: 993px)
            {
                .sidenav.sidenav-collapsible
                {
                    -webkit-transition: .3s ease all;
                       -moz-transition: .3s ease all;
                         -o-transition: .3s ease all;
                            transition: .3s ease all;
                }
            }
            .sidenav.right-aligned
            {
                right: 0;
                left: auto;
            
                -webkit-transform: translateX(105%);
                -webkit-transform: translateX(100%);
                   -moz-transform: translateX(105%);
                   -moz-transform: translateX(100%);
                    -ms-transform: translateX(105%);
                    -ms-transform: translateX(100%);
                     -o-transform: translateX(105%);
                     -o-transform: translateX(100%);
                        transform: translateX(105%);
                        transform: translateX(100%);
            }
            .sidenav .collapsible
            {
                margin: 0;
            }
            .sidenav li
            {
                line-height: 48px;
            
                float: none;
            }
            .sidenav li.active
            {
                background-color: rgba(0, 0, 0, .035);
            }
            .sidenav li > a
            {
                font-size: 12px;
                font-weight: 600 !important;
                line-height: 48px;
            
                display: block;
            
                height: 48px;
                padding: 0 32px;
            
                color: #e2dddd !important;
            }
            .sidenav li > a:hover
            {
                color: #fff !important;
            }
           
            .sidenav li > a.btn,
            .sidenav li > a.btn-large,
            .sidenav li > a.btn-small,
            .sidenav li > a.btn-large,
            .sidenav li > a.btn-flat,
            .sidenav li > a.btn-floating
            {
                margin: 10px 15px;
            }
            .sidenav li > a.btn,
            .sidenav li > a.btn-large,
            .sidenav li > a.btn-small,
            .sidenav li > a.btn-large,
            .sidenav li > a.btn-floating
            {
                color: #fff;
            }
            .sidenav li > a.btn-flat
            {
                color: #343434;
            }
            .sidenav li > a.btn:hover,
            .sidenav li > a.btn-large:hover,
            .sidenav li > a.btn-small:hover,
            .sidenav li > a.btn-large:hover
            {
                background-color: #00d3ee;
            }
            .sidenav li > a.btn-floating:hover
            {
                background-color: #00bcd4;
            }
            .sidenav li > a > i,
            .sidenav li > a > [class^='mdi-'],
            .sidenav li > a li > a > [class*='mdi-'],
            .sidenav li > a > i.material-icons
            {
                line-height: 48px;
            
                float: left;
            
                width: 24px;
                height: 48px;
                margin: 0 32px 0 0;
            
                color: #e2dddd;
                font-size: 16px !important;
                width: 1rem !important;
            }
            .sidenav .divider
            {
                margin: 8px 0 0 0;
            }
            .sidenav .subheader
            {
                font-size: 14px;
                font-weight: 500;
                line-height: 48px;
            
                cursor: initial;
                pointer-events: none;
            
                color: rgba(0, 0, 0, .54);
            }
            .sidenav .subheader:hover
            {
                background-color: transparent;
            }
            .sidenav .user-view
            {
                position: relative;
            
                margin-bottom: 8px;
                padding: 32px 32px 0;
            }
            .sidenav .user-view > a
            {
                height: auto;
                padding: 0;
            }
            .sidenav .user-view > a:hover
            {
                background-color: transparent;
            }
            .sidenav .user-view .background
            {
                position: absolute;
                z-index: -1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            
                overflow: hidden;
            }
            .sidenav .user-view .circle,
            .sidenav .user-view .name,
            .sidenav .user-view .email
            {
                display: block;
            }
            .sidenav .user-view .circle
            {
                width: 64px;
                height: 64px;
            }
            .sidenav .user-view .name,
            .sidenav .user-view .email
            {
                font-size: 14px;
                line-height: 24px;
            }
            .sidenav .user-view .name
            {
                font-weight: 500;
            
                margin-top: 16px;
            }
            .sidenav .user-view .email
            {
                font-weight: 400;
            
                padding-bottom: 16px;
            }
            
            .drag-target
            {
                position: fixed;
                z-index: 998;
                top: 0;
            
                width: 10px;
                height: 100%;
            }
            .drag-target.right-aligned
            {
                right: 0;
            }
            
            .sidenav.sidenav-fixed
            {
                position: fixed;
                left: 0;
            
                -webkit-transform: translateX(0);
                   -moz-transform: translateX(0);
                    -ms-transform: translateX(0);
                     -o-transform: translateX(0);
                        transform: translateX(0);
            }
            .sidenav.sidenav-fixed.right-aligned
            {
                right: 0;
                left: auto;
            }
            
            @media only screen and (max-width: 992px)
            {
                .sidenav.sidenav-fixed
                {
                    -webkit-transform: translateX(-105%);
                       -moz-transform: translateX(-105%);
                        -ms-transform: translateX(-105%);
                         -o-transform: translateX(-105%);
                            transform: translateX(-105%);
                }
                .sidenav.sidenav-fixed.right-aligned
                {
                    -webkit-transform: translateX(105%);
                       -moz-transform: translateX(105%);
                        -ms-transform: translateX(105%);
                         -o-transform: translateX(105%);
                            transform: translateX(105%);
                }
                .sidenav > a
                {
                    padding: 0 16px;
                }
                .sidenav .user-view
                {
                    padding: 16px 16px 0;
                }
            }
            
            .sidenav .collapsible-body > ul:not(.collapsible) > li.active,
            .sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active
            {
                background-color: #9c27b0;
            }
            .sidenav .collapsible-body > ul:not(.collapsible) > li.active a,
            .sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active a
            {
                color: #fff;
            }
            
            .sidenav .collapsible-body
            {
                padding: 0;
            }
            
            .sidenav-overlay
            {
                position: fixed;
                z-index: 997;
                top: 0;
                right: 0;
                left: 0;
            
                display: none;
            
                height: 120vh;
            
                opacity: 0;
                background-color: rgba(0, 0, 0, .5);
            }
            
            /*
                @license
                Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
                This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                Code distributed by Google as part of the polymer project is also
                subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
             */
            /**************************/
            /* STYLES FOR THE SPINNER */
            /**************************/
            /*
             * Constants:
             *      STROKEWIDTH = 3px
             *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
             *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
             *      ARCSTARTROT = 216 degrees (how much the start location of the arc
             *                                should rotate each time, 216 gives us a
             *                                5 pointed star shape (it's 360/5 * 3).
             *                                For a 7 pointed star, we might do
             *                                360/7 * 3 = 154.286)
             *      CONTAINERWIDTH = 28px
             *      SHRINK_TIME = 400ms
             */
            .preloader-wrapper
            {
                position: relative;
            
                display: inline-block;
            
                width: 50px;
                height: 50px;
            }
            .preloader-wrapper.small
            {
                width: 36px;
                height: 36px;
            }
            .preloader-wrapper.big
            {
                width: 64px;
                height: 64px;
            }
            .preloader-wrapper.active
            {
                /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
                -webkit-animation: container-rotate 1568ms linear infinite;
                   -moz-animation: container-rotate 1568ms linear infinite;
                     -o-animation: container-rotate 1568ms linear infinite;
                        animation: container-rotate 1568ms linear infinite;
            }
            
            @-webkit-keyframes container-rotate
            {
                to
                {
                    -webkit-transform: rotate(360deg);
                }
            }
            
            @-moz-keyframes container-rotate
            {
                to
                {
                    -moz-transform: rotate(360deg);
                         transform: rotate(360deg);
                }
            }
            
            @-o-keyframes container-rotate
            {
                to
                {
                    -o-transform: rotate(360deg);
                       transform: rotate(360deg);
                }
            }
            
            @keyframes container-rotate
            {
                to
                {
                    -webkit-transform: rotate(360deg);
                       -moz-transform: rotate(360deg);
                         -o-transform: rotate(360deg);
                            transform: rotate(360deg);
                }
            }
            
            .spinner-layer
            {
                position: absolute;
            
                width: 100%;
                height: 100%;
            
                opacity: 0;
                border-color: #00bcd4;
            }
            
            .spinner-blue,
            .spinner-blue-only
            {
                border-color: #4285f4;
            }
            
            .spinner-red,
            .spinner-red-only
            {
                border-color: #db4437;
            }
            
            .spinner-yellow,
            .spinner-yellow-only
            {
                border-color: #f4b400;
            }
            
            .spinner-green,
            .spinner-green-only
            {
                border-color: #0f9d58;
            }
            
            /**
             * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
             *
             * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
             * guarantee that the animation will start _exactly_ after that value. So we avoid using
             * animation-delay and instead set custom keyframes for each color (as redundant as it
             * seems).
             *
             * We write out each animation in full (instead of separating animation-name,
             * animation-duration, etc.) because under the polyfill, Safari does not recognize those
             * specific properties properly, treats them as -webkit-animation, and overrides the
             * other animation rules. See https://github.com/Polymer/platform/issues/53.
             */
            .active .spinner-layer.spinner-blue
            {
                /* durations: 4 * ARCTIME */
                -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            .active .spinner-layer.spinner-red
            {
                /* durations: 4 * ARCTIME */
                -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            .active .spinner-layer.spinner-yellow
            {
                /* durations: 4 * ARCTIME */
                -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            .active .spinner-layer.spinner-green
            {
                /* durations: 4 * ARCTIME */
                -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            .active .spinner-layer,
            .active .spinner-layer.spinner-blue-only,
            .active .spinner-layer.spinner-red-only,
            .active .spinner-layer.spinner-yellow-only,
            .active .spinner-layer.spinner-green-only
            {
                -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
                /* durations: 4 * ARCTIME */
            
                opacity: 1;
            }
            
            @-webkit-keyframes fill-unfill-rotate
            {
                12.5%
                {
                    -webkit-transform: rotate(135deg);
                }
                /* 0.5 * ARCSIZE */
                25%
                {
                    -webkit-transform: rotate(270deg);
                }
                /* 1   * ARCSIZE */
                37.5%
                {
                    -webkit-transform: rotate(405deg);
                }
                /* 1.5 * ARCSIZE */
                50%
                {
                    -webkit-transform: rotate(540deg);
                }
                /* 2   * ARCSIZE */
                62.5%
                {
                    -webkit-transform: rotate(675deg);
                }
                /* 2.5 * ARCSIZE */
                75%
                {
                    -webkit-transform: rotate(810deg);
                }
                /* 3   * ARCSIZE */
                87.5%
                {
                    -webkit-transform: rotate(945deg);
                }
                /* 3.5 * ARCSIZE */
                to
                {
                    -webkit-transform: rotate(1080deg);
                }
                /* 4   * ARCSIZE */
            }
            
            @-moz-keyframes fill-unfill-rotate
            {
                12.5%
                {
                    -moz-transform: rotate(135deg);
                         transform: rotate(135deg);
                }
                /* 0.5 * ARCSIZE */
                25%
                {
                    -moz-transform: rotate(270deg);
                         transform: rotate(270deg);
                }
                /* 1   * ARCSIZE */
                37.5%
                {
                    -moz-transform: rotate(405deg);
                         transform: rotate(405deg);
                }
                /* 1.5 * ARCSIZE */
                50%
                {
                    -moz-transform: rotate(540deg);
                         transform: rotate(540deg);
                }
                /* 2   * ARCSIZE */
                62.5%
                {
                    -moz-transform: rotate(675deg);
                         transform: rotate(675deg);
                }
                /* 2.5 * ARCSIZE */
                75%
                {
                    -moz-transform: rotate(810deg);
                         transform: rotate(810deg);
                }
                /* 3   * ARCSIZE */
                87.5%
                {
                    -moz-transform: rotate(945deg);
                         transform: rotate(945deg);
                }
                /* 3.5 * ARCSIZE */
                to
                {
                    -moz-transform: rotate(1080deg);
                         transform: rotate(1080deg);
                }
                /* 4   * ARCSIZE */
            }
            
            @-o-keyframes fill-unfill-rotate
            {
                12.5%
                {
                    -o-transform: rotate(135deg);
                       transform: rotate(135deg);
                }
                /* 0.5 * ARCSIZE */
                25%
                {
                    -o-transform: rotate(270deg);
                       transform: rotate(270deg);
                }
                /* 1   * ARCSIZE */
                37.5%
                {
                    -o-transform: rotate(405deg);
                       transform: rotate(405deg);
                }
                /* 1.5 * ARCSIZE */
                50%
                {
                    -o-transform: rotate(540deg);
                       transform: rotate(540deg);
                }
                /* 2   * ARCSIZE */
                62.5%
                {
                    -o-transform: rotate(675deg);
                       transform: rotate(675deg);
                }
                /* 2.5 * ARCSIZE */
                75%
                {
                    -o-transform: rotate(810deg);
                       transform: rotate(810deg);
                }
                /* 3   * ARCSIZE */
                87.5%
                {
                    -o-transform: rotate(945deg);
                       transform: rotate(945deg);
                }
                /* 3.5 * ARCSIZE */
                to
                {
                    -o-transform: rotate(1080deg);
                       transform: rotate(1080deg);
                }
                /* 4   * ARCSIZE */
            }
            
            @keyframes fill-unfill-rotate
            {
                12.5%
                {
                    -webkit-transform: rotate(135deg);
                       -moz-transform: rotate(135deg);
                         -o-transform: rotate(135deg);
                            transform: rotate(135deg);
                }
                /* 0.5 * ARCSIZE */
                25%
                {
                    -webkit-transform: rotate(270deg);
                       -moz-transform: rotate(270deg);
                         -o-transform: rotate(270deg);
                            transform: rotate(270deg);
                }
                /* 1   * ARCSIZE */
                37.5%
                {
                    -webkit-transform: rotate(405deg);
                       -moz-transform: rotate(405deg);
                         -o-transform: rotate(405deg);
                            transform: rotate(405deg);
                }
                /* 1.5 * ARCSIZE */
                50%
                {
                    -webkit-transform: rotate(540deg);
                       -moz-transform: rotate(540deg);
                         -o-transform: rotate(540deg);
                            transform: rotate(540deg);
                }
                /* 2   * ARCSIZE */
                62.5%
                {
                    -webkit-transform: rotate(675deg);
                       -moz-transform: rotate(675deg);
                         -o-transform: rotate(675deg);
                            transform: rotate(675deg);
                }
                /* 2.5 * ARCSIZE */
                75%
                {
                    -webkit-transform: rotate(810deg);
                       -moz-transform: rotate(810deg);
                         -o-transform: rotate(810deg);
                            transform: rotate(810deg);
                }
                /* 3   * ARCSIZE */
                87.5%
                {
                    -webkit-transform: rotate(945deg);
                       -moz-transform: rotate(945deg);
                         -o-transform: rotate(945deg);
                            transform: rotate(945deg);
                }
                /* 3.5 * ARCSIZE */
                to
                {
                    -webkit-transform: rotate(1080deg);
                       -moz-transform: rotate(1080deg);
                         -o-transform: rotate(1080deg);
                            transform: rotate(1080deg);
                }
                /* 4   * ARCSIZE */
            }
            
            @-webkit-keyframes blue-fade-in-out
            {
                from
                {
                    opacity: 1;
                }
                25%
                {
                    opacity: 1;
                }
                26%
                {
                    opacity: 0;
                }
                89%
                {
                    opacity: 0;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 1;
                }
            }
            
            @-moz-keyframes blue-fade-in-out
            {
                from
                {
                    opacity: 1;
                }
                25%
                {
                    opacity: 1;
                }
                26%
                {
                    opacity: 0;
                }
                89%
                {
                    opacity: 0;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 1;
                }
            }
            
            @-o-keyframes blue-fade-in-out
            {
                from
                {
                    opacity: 1;
                }
                25%
                {
                    opacity: 1;
                }
                26%
                {
                    opacity: 0;
                }
                89%
                {
                    opacity: 0;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 1;
                }
            }
            
            @keyframes blue-fade-in-out
            {
                from
                {
                    opacity: 1;
                }
                25%
                {
                    opacity: 1;
                }
                26%
                {
                    opacity: 0;
                }
                89%
                {
                    opacity: 0;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 1;
                }
            }
            
            @-webkit-keyframes red-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                15%
                {
                    opacity: 0;
                }
                25%
                {
                    opacity: 1;
                }
                50%
                {
                    opacity: 1;
                }
                51%
                {
                    opacity: 0;
                }
            }
            
            @-moz-keyframes red-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                15%
                {
                    opacity: 0;
                }
                25%
                {
                    opacity: 1;
                }
                50%
                {
                    opacity: 1;
                }
                51%
                {
                    opacity: 0;
                }
            }
            
            @-o-keyframes red-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                15%
                {
                    opacity: 0;
                }
                25%
                {
                    opacity: 1;
                }
                50%
                {
                    opacity: 1;
                }
                51%
                {
                    opacity: 0;
                }
            }
            
            @keyframes red-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                15%
                {
                    opacity: 0;
                }
                25%
                {
                    opacity: 1;
                }
                50%
                {
                    opacity: 1;
                }
                51%
                {
                    opacity: 0;
                }
            }
            
            @-webkit-keyframes yellow-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                40%
                {
                    opacity: 0;
                }
                50%
                {
                    opacity: 1;
                }
                75%
                {
                    opacity: 1;
                }
                76%
                {
                    opacity: 0;
                }
            }
            
            @-moz-keyframes yellow-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                40%
                {
                    opacity: 0;
                }
                50%
                {
                    opacity: 1;
                }
                75%
                {
                    opacity: 1;
                }
                76%
                {
                    opacity: 0;
                }
            }
            
            @-o-keyframes yellow-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                40%
                {
                    opacity: 0;
                }
                50%
                {
                    opacity: 1;
                }
                75%
                {
                    opacity: 1;
                }
                76%
                {
                    opacity: 0;
                }
            }
            
            @keyframes yellow-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                40%
                {
                    opacity: 0;
                }
                50%
                {
                    opacity: 1;
                }
                75%
                {
                    opacity: 1;
                }
                76%
                {
                    opacity: 0;
                }
            }
            
            @-webkit-keyframes green-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                65%
                {
                    opacity: 0;
                }
                75%
                {
                    opacity: 1;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 0;
                }
            }
            
            @-moz-keyframes green-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                65%
                {
                    opacity: 0;
                }
                75%
                {
                    opacity: 1;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 0;
                }
            }
            
            @-o-keyframes green-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                65%
                {
                    opacity: 0;
                }
                75%
                {
                    opacity: 1;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 0;
                }
            }
            
            @keyframes green-fade-in-out
            {
                from
                {
                    opacity: 0;
                }
                65%
                {
                    opacity: 0;
                }
                75%
                {
                    opacity: 1;
                }
                90%
                {
                    opacity: 1;
                }
                100%
                {
                    opacity: 0;
                }
            }
            
            /**
             * Patch the gap that appear between the two adjacent div.circle-clipper while the
             * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
             */
            .gap-patch
            {
                position: absolute;
                top: 0;
                left: 45%;
            
                overflow: hidden;
            
                width: 10%;
                height: 100%;
            
                border-color: inherit;
            }
            
            .gap-patch .circle
            {
                left: -450%;
            
                width: 1000%;
            }
            
            .circle-clipper
            {
                position: relative;
            
                display: inline-block;
                overflow: hidden;
            
                width: 50%;
                height: 100%;
            
                border-color: inherit;
            }
            .circle-clipper .circle
            {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
            
                width: 200%;
                height: 100%;
            
                -webkit-animation: none;
                   -moz-animation: none;
                     -o-animation: none;
                        animation: none;
            
                border-width: 3px;
                /* STROKEWIDTH */
                border-style: solid;
                border-color: inherit;
                border-bottom-color: transparent !important;
                border-radius: 50%;
            }
            .circle-clipper.left .circle
            {
                left: 0;
            
                -webkit-transform: rotate(129deg);
                   -moz-transform: rotate(129deg);
                    -ms-transform: rotate(129deg);
                     -o-transform: rotate(129deg);
                        transform: rotate(129deg);
            
                border-right-color: transparent !important;
            }
            .circle-clipper.right .circle
            {
                left: -100%;
            
                -webkit-transform: rotate(-129deg);
                   -moz-transform: rotate(-129deg);
                    -ms-transform: rotate(-129deg);
                     -o-transform: rotate(-129deg);
                        transform: rotate(-129deg);
            
                border-left-color: transparent !important;
            }
            
            .active .circle-clipper.left .circle
            {
                /* duration: ARCTIME */
                -webkit-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            .active .circle-clipper.right .circle
            {
                /* duration: ARCTIME */
                -webkit-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                   -moz-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                     -o-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
                        animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
            }
            
            @-webkit-keyframes left-spin
            {
                from
                {
                    -webkit-transform: rotate(130deg);
                }
                50%
                {
                    -webkit-transform: rotate(-5deg);
                }
                to
                {
                    -webkit-transform: rotate(130deg);
                }
            }
            
            @-moz-keyframes left-spin
            {
                from
                {
                    -moz-transform: rotate(130deg);
                         transform: rotate(130deg);
                }
                50%
                {
                    -moz-transform: rotate(-5deg);
                         transform: rotate(-5deg);
                }
                to
                {
                    -moz-transform: rotate(130deg);
                         transform: rotate(130deg);
                }
            }
            
            @-o-keyframes left-spin
            {
                from
                {
                    -o-transform: rotate(130deg);
                       transform: rotate(130deg);
                }
                50%
                {
                    -o-transform: rotate(-5deg);
                       transform: rotate(-5deg);
                }
                to
                {
                    -o-transform: rotate(130deg);
                       transform: rotate(130deg);
                }
            }
            
            @keyframes left-spin
            {
                from
                {
                    -webkit-transform: rotate(130deg);
                       -moz-transform: rotate(130deg);
                         -o-transform: rotate(130deg);
                            transform: rotate(130deg);
                }
                50%
                {
                    -webkit-transform: rotate(-5deg);
                       -moz-transform: rotate(-5deg);
                         -o-transform: rotate(-5deg);
                            transform: rotate(-5deg);
                }
                to
                {
                    -webkit-transform: rotate(130deg);
                       -moz-transform: rotate(130deg);
                         -o-transform: rotate(130deg);
                            transform: rotate(130deg);
                }
            }
            
            @-webkit-keyframes right-spin
            {
                from
                {
                    -webkit-transform: rotate(-130deg);
                }
                50%
                {
                    -webkit-transform: rotate(5deg);
                }
                to
                {
                    -webkit-transform: rotate(-130deg);
                }
            }
            
            @-moz-keyframes right-spin
            {
                from
                {
                    -moz-transform: rotate(-130deg);
                         transform: rotate(-130deg);
                }
                50%
                {
                    -moz-transform: rotate(5deg);
                         transform: rotate(5deg);
                }
                to
                {
                    -moz-transform: rotate(-130deg);
                         transform: rotate(-130deg);
                }
            }
            
            @-o-keyframes right-spin
            {
                from
                {
                    -o-transform: rotate(-130deg);
                       transform: rotate(-130deg);
                }
                50%
                {
                    -o-transform: rotate(5deg);
                       transform: rotate(5deg);
                }
                to
                {
                    -o-transform: rotate(-130deg);
                       transform: rotate(-130deg);
                }
            }
            
            @keyframes right-spin
            {
                from
                {
                    -webkit-transform: rotate(-130deg);
                       -moz-transform: rotate(-130deg);
                         -o-transform: rotate(-130deg);
                            transform: rotate(-130deg);
                }
                50%
                {
                    -webkit-transform: rotate(5deg);
                       -moz-transform: rotate(5deg);
                         -o-transform: rotate(5deg);
                            transform: rotate(5deg);
                }
                to
                {
                    -webkit-transform: rotate(-130deg);
                       -moz-transform: rotate(-130deg);
                         -o-transform: rotate(-130deg);
                            transform: rotate(-130deg);
                }
            }
            
            #spinnerContainer.cooldown
            {
                /* duration: SHRINK_TIME */
                -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(.4, 0, .2, 1);
                   -moz-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(.4, 0, .2, 1);
                     -o-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(.4, 0, .2, 1);
                        animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(.4, 0, .2, 1);
            }
            
            @-webkit-keyframes fade-out
            {
                from
                {
                    opacity: 1;
                }
                to
                {
                    opacity: 0;
                }
            }
            
            @-moz-keyframes fade-out
            {
                from
                {
                    opacity: 1;
                }
                to
                {
                    opacity: 0;
                }
            }
            
            @-o-keyframes fade-out
            {
                from
                {
                    opacity: 1;
                }
                to
                {
                    opacity: 0;
                }
            }
            
            @keyframes fade-out
            {
                from
                {
                    opacity: 1;
                }
                to
                {
                    opacity: 0;
                }
            }
            
            .slider
            {
                position: relative;
            
                width: 100%;
                height: 400px;
            }
            .slider.fullscreen
            {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            
                width: 100%;
                height: 100%;
            }
            .slider.fullscreen ul.slides
            {
                height: 100%;
            }
            .slider.fullscreen ul.indicators
            {
                z-index: 2;
                bottom: 30px;
            }
            .slider .slides
            {
                height: 400px;
                margin: 0;
            
                background-color: #9e9e9e;
            }
            .slider .slides li
            {
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
            
                overflow: hidden;
            
                width: 100%;
                height: inherit;
            
                opacity: 0;
            }
            .slider .slides li img
            {
                width: 100%;
                height: 100%;
            
                background-position: center;
                -webkit-background-size: cover;
                        background-size: cover;
            }
            .slider .slides li .caption
            {
                position: absolute;
                top: 15%;
                left: 15%;
            
                width: 70%;
            
                opacity: 0;
                color: #fff;
            }
            .slider .slides li .caption p
            {
                color: #e0e0e0;
            }
            .slider .slides li.active
            {
                z-index: 2;
            }
            .slider .indicators
            {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
            
                margin: 0;
            
                text-align: center;
            }
            .slider .indicators .indicator-item
            {
                position: relative;
            
                display: inline-block;
            
                width: 16px;
                height: 16px;
                margin: 0 12px;
            
                cursor: pointer;
                -webkit-transition: background-color .3s;
                   -moz-transition: background-color .3s;
                     -o-transition: background-color .3s;
                        transition: background-color .3s;
            
                border-radius: 50%;
                background-color: #e0e0e0;
            }
            .slider .indicators .indicator-item.active
            {
                background-color: #4caf50;
            }
            
            .carousel
            {
                position: relative;
            
                overflow: hidden;
            
                width: 100%;
                height: 400px;
            
                -webkit-transform-origin: 0 50%;
                   -moz-transform-origin: 0 50%;
                    -ms-transform-origin: 0 50%;
                     -o-transform-origin: 0 50%;
                        transform-origin: 0 50%;
            
                -webkit-perspective: 500px;
                   -moz-perspective: 500px;
                        perspective: 500px;
                -webkit-transform-style: preserve-3d;
                   -moz-transform-style: preserve-3d;
                        transform-style: preserve-3d;
            }
            .carousel.carousel-slider
            {
                top: 0;
                left: 0;
            }
            .carousel.carousel-slider .carousel-fixed-item
            {
                position: absolute;
                z-index: 1;
                right: 0;
                bottom: 20px;
                left: 0;
            }
            .carousel.carousel-slider .carousel-fixed-item.with-indicators
            {
                bottom: 68px;
            }
            .carousel.carousel-slider .carousel-item
            {
                position: absolute;
                top: 0;
                left: 0;
            
                width: 100%;
                height: 100%;
                min-height: 400px;
            }
            .carousel.carousel-slider .carousel-item h2
            {
                font-size: 24px;
                font-weight: 500;
                line-height: 32px;
            }
            .carousel.carousel-slider .carousel-item p
            {
                font-size: 15px;
            }
            .carousel .carousel-item
            {
                position: absolute;
                top: 0;
                left: 0;
            
                visibility: hidden;
            
                width: 200px;
                height: 200px;
            }
            .carousel .carousel-item > img
            {
                width: 100%;
            }
            .carousel .indicators
            {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
            
                margin: 0;
            
                text-align: center;
            }
            .carousel .indicators .indicator-item
            {
                position: relative;
            
                display: inline-block;
            
                width: 8px;
                height: 8px;
                margin: 24px 4px;
            
                cursor: pointer;
                -webkit-transition: background-color .3s;
                   -moz-transition: background-color .3s;
                     -o-transition: background-color .3s;
                        transition: background-color .3s;
            
                border-radius: 50%;
                background-color: rgba(255, 255, 255, .5);
            }
            .carousel .indicators .indicator-item.active
            {
                background-color: #fff;
            }
            .carousel.scrolling .carousel-item .materialboxed,
            .carousel .carousel-item:not(.active) .materialboxed
            {
                pointer-events: none;
            }
            
            .tap-target-wrapper
            {
                position: fixed;
                z-index: 1000;
            
                visibility: hidden;
            
                width: 800px;
                height: 800px;
            
                -webkit-transition: visibility 0s .3s;
                   -moz-transition: visibility 0s .3s;
                     -o-transition: visibility 0s .3s;
                        transition: visibility 0s .3s;
            }
            
            .tap-target-wrapper.open
            {
                visibility: visible;
            
                -webkit-transition: visibility 0s;
                   -moz-transition: visibility 0s;
                     -o-transition: visibility 0s;
                        transition: visibility 0s;
            }
            .tap-target-wrapper.open .tap-target
            {
                -webkit-transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1);
                   -moz-transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1), -moz-transform .3s cubic-bezier(.42, 0, .58, 1);
                     -o-transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -o-transform .3s cubic-bezier(.42, 0, .58, 1);
                        transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1);
                        transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1);
                        transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1), -moz-transform .3s cubic-bezier(.42, 0, .58, 1), -o-transform .3s cubic-bezier(.42, 0, .58, 1);
                -webkit-transform: scale(1);
                   -moz-transform: scale(1);
                    -ms-transform: scale(1);
                     -o-transform: scale(1);
                        transform: scale(1);
            
                opacity: .95;
            }
            .tap-target-wrapper.open .tap-target-wave::before
            {
                -webkit-transform: scale(1);
                   -moz-transform: scale(1);
                    -ms-transform: scale(1);
                     -o-transform: scale(1);
                        transform: scale(1);
            }
            .tap-target-wrapper.open .tap-target-wave::after
            {
                visibility: visible;
            
                -webkit-transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;
                   -moz-transition: opacity .3s, transform .3s, visibility 0s 1s, -moz-transform .3s;
                     -o-transition: opacity .3s, visibility 0s 1s, -o-transform .3s;
                        transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;
                        transition: opacity .3s, transform .3s, visibility 0s 1s;
                        transition: opacity .3s, transform .3s, visibility 0s 1s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
                -webkit-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                   -moz-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                     -o-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                        animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
            }
            
            .tap-target
            {
                font-size: 1rem;
            
                position: absolute;
            
                width: 100%;
                height: 100%;
            
                -webkit-transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1);
                   -moz-transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1), -moz-transform .3s cubic-bezier(.42, 0, .58, 1);
                     -o-transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -o-transform .3s cubic-bezier(.42, 0, .58, 1);
                        transition: opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1);
                        transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1);
                        transition: transform .3s cubic-bezier(.42, 0, .58, 1), opacity .3s cubic-bezier(.42, 0, .58, 1), -webkit-transform .3s cubic-bezier(.42, 0, .58, 1), -moz-transform .3s cubic-bezier(.42, 0, .58, 1), -o-transform .3s cubic-bezier(.42, 0, .58, 1);
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            
                opacity: 0;
                border-radius: 50%;
                background-color: #9c27b0;
                -webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, .14), 0 10px 50px 0 rgba(0, 0, 0, .12), 0 30px 10px -20px rgba(0, 0, 0, .2);
                        box-shadow: 0 20px 20px 0 rgba(0, 0, 0, .14), 0 10px 50px 0 rgba(0, 0, 0, .12), 0 30px 10px -20px rgba(0, 0, 0, .2);
            }
            
            .tap-target-content
            {
                position: relative;
            
                display: table-cell;
            }
            
            .tap-target-wave
            {
                position: absolute;
                z-index: 10001;
            
                border-radius: 50%;
            }
            .tap-target-wave::before,
            .tap-target-wave::after
            {
                position: absolute;
            
                display: block;
            
                width: 100%;
                height: 100%;
            
                content: '';
            
                border-radius: 50%;
                background-color: #fff;
            }
            .tap-target-wave::before
            {
                -webkit-transition: -webkit-transform .3s;
                   -moz-transition:         transform .3s, -moz-transform .3s;
                     -o-transition:      -o-transform .3s;
                        transition: -webkit-transform .3s;
                        transition:         transform .3s;
                        transition:         transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
                -webkit-transform: scale(0);
                   -moz-transform: scale(0);
                    -ms-transform: scale(0);
                     -o-transform: scale(0);
                        transform: scale(0);
            }
            .tap-target-wave::after
            {
                z-index: -1;
            
                visibility: hidden;
            
                -webkit-transition: opacity .3s, visibility 0s, -webkit-transform .3s;
                   -moz-transition: opacity .3s, transform .3s, visibility 0s, -moz-transform .3s;
                     -o-transition: opacity .3s, visibility 0s, -o-transform .3s;
                        transition: opacity .3s, visibility 0s, -webkit-transform .3s;
                        transition: opacity .3s, transform .3s, visibility 0s;
                        transition: opacity .3s, transform .3s, visibility 0s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
            }
            
            .tap-target-origin
            {
                position: absolute !important;
                z-index: 10002;
                top: 50%;
                left: 50%;
            
                -webkit-transform: translate(-50%, -50%);
                   -moz-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                     -o-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
            }
            .tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),
            .tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover
            {
                background: none;
            }
            
            @media only screen and (max-width: 600px)
            {
                .tap-target,
                .tap-target-wrapper
                {
                    width: 600px;
                    height: 600px;
                }
            }
            
            .pulse
            {
                position: relative;
            
                overflow: visible;
            }
            .pulse::before
            {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
            
                display: block;
            
                width: 100%;
                height: 100%;
            
                content: '';
                -webkit-transition: opacity .3s, -webkit-transform .3s;
                   -moz-transition: opacity .3s, transform .3s, -moz-transform .3s;
                     -o-transition: opacity .3s, -o-transform .3s;
                        transition: opacity .3s, -webkit-transform .3s;
                        transition: opacity .3s, transform .3s;
                        transition: opacity .3s, transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
                -webkit-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                   -moz-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                     -o-animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
                        animation: pulse-animation 1s cubic-bezier(.24, 0, .38, 1) infinite;
            
                border-radius: inherit;
                background-color: inherit;
            }
            
            @-webkit-keyframes pulse-animation
            {
                0%
                {
                    -webkit-transform: scale(1);
                            transform: scale(1);
            
                    opacity: 1;
                }
                50%
                {
                    -webkit-transform: scale(1.5);
                            transform: scale(1.5);
            
                    opacity: 0;
                }
                100%
                {
                    -webkit-transform: scale(1.5);
                            transform: scale(1.5);
            
                    opacity: 0;
                }
            }
            
            @-moz-keyframes pulse-animation
            {
                0%
                {
                    -moz-transform: scale(1);
                         transform: scale(1);
            
                    opacity: 1;
                }
                50%
                {
                    -moz-transform: scale(1.5);
                         transform: scale(1.5);
            
                    opacity: 0;
                }
                100%
                {
                    -moz-transform: scale(1.5);
                         transform: scale(1.5);
            
                    opacity: 0;
                }
            }
            
            @-o-keyframes pulse-animation
            {
                0%
                {
                    -o-transform: scale(1);
                       transform: scale(1);
            
                    opacity: 1;
                }
                50%
                {
                    -o-transform: scale(1.5);
                       transform: scale(1.5);
            
                    opacity: 0;
                }
                100%
                {
                    -o-transform: scale(1.5);
                       transform: scale(1.5);
            
                    opacity: 0;
                }
            }
            
            @keyframes pulse-animation
            {
                0%
                {
                    -webkit-transform: scale(1);
                       -moz-transform: scale(1);
                         -o-transform: scale(1);
                            transform: scale(1);
            
                    opacity: 1;
                }
                50%
                {
                    -webkit-transform: scale(1.5);
                       -moz-transform: scale(1.5);
                         -o-transform: scale(1.5);
                            transform: scale(1.5);
            
                    opacity: 0;
                }
                100%
                {
                    -webkit-transform: scale(1.5);
                       -moz-transform: scale(1.5);
                         -o-transform: scale(1.5);
                            transform: scale(1.5);
            
                    opacity: 0;
                }
            }
            
            /* Modal */
            .datepicker-modal
            {
                min-width: 300px;
                max-width: 325px;
                max-height: none;
            }
            .modal-content h4{
                font-size:24px;
            }
            .modal-footer .btn{
                margin:6px 6px !important;
            }
            .datepicker-container.modal-content
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
                        flex-direction: column;
            
                padding: 0;
            
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                   -moz-box-orient: vertical;
                   -moz-box-direction: normal;
                    -ms-flex-direction: column;
            }
            
            .datepicker-controls
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                width: 280px;
                margin: 0 auto;
            
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                -ms-flex-pack: justify;
                        justify-content: space-between;
            }
            .datepicker-controls .selects-container
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            }
            .datepicker-controls .select-wrapper input
            {
                margin: 0;
            
                text-align: center;
            
                border-bottom: none;
            }
            .datepicker-controls .select-wrapper input:focus
            {
                border-bottom: none;
            }
            .datepicker-controls .select-wrapper .caret
            {
                display: none;
            }
            .datepicker-controls .select-year input
            {
                width: 50px;
            }
            .datepicker-controls .select-month input
            {
                width: 70px;
            }
            
            .month-prev,
            .month-next
            {
                margin-top: 4px;
            
                cursor: pointer;
            
                border: none;
                background-color: transparent;
            }
            
            /* Date Display */
            .datepicker-date-display
            {
                font-weight: 500;
            
                padding: 20px 22px;
            
                color: #fff;
                background-color: #00bcd4;
            
                -webkit-box-flex: 1;
                -webkit-flex: 1 auto;
                   -moz-box-flex: 1;
                    -ms-flex: 1 auto;
                        flex: 1 auto;
            }
            .datepicker-date-display .year-text
            {
                font-size: 1.5rem;
                line-height: 25px;
            
                display: block;
            
                color: rgba(255, 255, 255, .7);
            }
            .datepicker-date-display .date-text
            {
                font-size: 2.8rem;
                font-weight: 500;
                line-height: 47px;
            
                display: block;
            }
            
            /* Calendar */
            .datepicker-calendar-container
            {
                -webkit-box-flex: 2.5;
                -webkit-flex: 2.5 auto;
                   -moz-box-flex: 2.5;
                    -ms-flex: 2.5 auto;
                        flex: 2.5 auto;
            }
            
            .datepicker-table
            {
                font-size: 1rem;
            
                width: 280px;
                margin: 0 auto;
            }
            .datepicker-table thead
            {
                border-bottom: none;
            }
            .datepicker-table th
            {
                padding: 10px 5px;
            
                text-align: center;
            }
            .datepicker-table tr
            {
                border: none;
            }
            .datepicker-table abbr
            {
                text-decoration: none;
            
                color: #999;
            }
            .datepicker-table td
            {
                padding: 0;
            
                border-radius: 50%;
            }
            .datepicker-table td.is-today
            {
                color: #00bcd4;
            }
            .datepicker-table td.is-selected
            {
                color: #fff;
                background-color: #00bcd4;
            }
            .datepicker-table td.is-outside-current-month,
            .datepicker-table td.is-disabled
            {
                pointer-events: none;
            
                color: rgba(0, 0, 0, .3);
            }
            
            .datepicker-day-button
            {
                line-height: 38px;
            
                display: block;
            
                width: 100%;
                padding: 0 5px;
            
                cursor: pointer;
            
                color: inherit;
                border: none;
                border-radius: 50%;
                background-color: transparent;
            }
            .datepicker-day-button:focus
            {
                background-color: rgba(5, 184, 207, .25);
            }
            
            /* Footer */
            .datepicker-footer
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                width: 280px;
                margin: 0 auto;
                padding-bottom: 5px;
            
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                -ms-flex-pack: justify;
                        justify-content: space-between;
            }
            
            .datepicker-cancel,
            .datepicker-clear,
            .datepicker-today,
            .datepicker-done
            {
                padding: 0 1rem;
            
                color: #00bcd4;
            }
            
            .datepicker-clear
            {
                color: #ff5252;
            }
            
            /* Media Queries */
            @media only screen and (min-width: 601px)
            {
                .datepicker-modal
                {
                    max-width: 625px;
                }
                .datepicker-container.modal-content
                {
                            flex-direction: row;
            
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                       -moz-box-orient: horizontal;
                       -moz-box-direction: normal;
                        -ms-flex-direction: row;
                }
                .datepicker-date-display
                {
                    -webkit-box-flex: 0;
                    -webkit-flex: 0 1 270px;
                       -moz-box-flex: 0;
                        -ms-flex: 0 1 270px;
                            flex: 0 1 270px;
                }
                .datepicker-controls,
                .datepicker-table,
                .datepicker-footer
                {
                    width: 320px;
                }
                .datepicker-day-button
                {
                    line-height: 44px;
                }
            }
            
            /* Timepicker Containers */
            .timepicker-modal
            {
                max-width: 325px;
                max-height: none;
            }
            
            .timepicker-container.modal-content
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
                        flex-direction: column;
            
                padding: 0;
            
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                   -moz-box-orient: vertical;
                   -moz-box-direction: normal;
                    -ms-flex-direction: column;
            }
            
            .text-primary
            {
                color: white;
            }
            
            /* Clock Digital Display */
            .timepicker-digital-display
            {
                font-weight: 300;
            
                padding: 10px;
            
                background-color: #00bcd4;
            
                -webkit-box-flex: 1;
                -webkit-flex: 1 auto;
                   -moz-box-flex: 1;
                    -ms-flex: 1 auto;
                        flex: 1 auto;
            }
            
            .timepicker-text-container
            {
                font-size: 4rem;
                font-weight: bold;
                font-weight: 400;
            
                position: relative;
            
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
                text-align: center;
            
                color: rgba(255, 255, 255, .6);
            }
            
            .timepicker-span-hours,
            .timepicker-span-minutes,
            .timepicker-span-am-pm div
            {
                cursor: pointer;
            }
            
            .timepicker-span-hours
            {
                margin-right: 3px;
            }
            
            .timepicker-span-minutes
            {
                margin-left: 3px;
            }
            
            .timepicker-display-am-pm
            {
                font-size: 1.3rem;
                font-weight: 400;
            
                position: absolute;
                right: 1rem;
                bottom: 1rem;
            }
            
            /* Analog Clock Display */
            .timepicker-analog-display
            {
                -webkit-box-flex: 2.5;
                -webkit-flex: 2.5 auto;
                   -moz-box-flex: 2.5;
                    -ms-flex: 2.5 auto;
                        flex: 2.5 auto;
            }
            
            .timepicker-plate
            {
                position: relative;
            
                overflow: visible;
            
                width: 270px;
                height: 270px;
                margin: auto;
                margin-top: 25px;
                margin-bottom: 5px;
            
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
            
                border-radius: 50%;
                background-color: #eee;
            }
            
            .timepicker-canvas,
            .timepicker-dial
            {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            
            .timepicker-minutes
            {
                visibility: hidden;
            }
            
            .timepicker-tick
            {
                font-size: 15px;
                line-height: 40px;
            
                position: absolute;
            
                width: 40px;
                height: 40px;
            
                cursor: pointer;
                text-align: center;
            
                color: rgba(0, 0, 0, .87);
                border-radius: 50%;
            }
            
            .timepicker-tick.active,
            .timepicker-tick:hover
            {
                background-color: rgba(0, 188, 212, .25);
            }
            
            .timepicker-dial
            {
                -webkit-transition: opacity 350ms, -webkit-transform 350ms;
                   -moz-transition: transform 350ms, opacity 350ms, -moz-transform 350ms;
                     -o-transition: opacity 350ms, -o-transform 350ms;
                        transition: opacity 350ms, -webkit-transform 350ms;
                        transition: transform 350ms, opacity 350ms;
                        transition: transform 350ms, opacity 350ms, -webkit-transform 350ms, -moz-transform 350ms, -o-transform 350ms;
            }
            
            .timepicker-dial-out
            {
                opacity: 0;
            }
            .timepicker-dial-out.timepicker-hours
            {
                -webkit-transform: scale(1.1, 1.1);
                   -moz-transform: scale(1.1, 1.1);
                    -ms-transform: scale(1.1, 1.1);
                     -o-transform: scale(1.1, 1.1);
                        transform: scale(1.1, 1.1);
            }
            .timepicker-dial-out.timepicker-minutes
            {
                -webkit-transform: scale(.8, .8);
                   -moz-transform: scale(.8, .8);
                    -ms-transform: scale(.8, .8);
                     -o-transform: scale(.8, .8);
                        transform: scale(.8, .8);
            }
            
            .timepicker-canvas
            {
                -webkit-transition: opacity 175ms;
                   -moz-transition: opacity 175ms;
                     -o-transition: opacity 175ms;
                        transition: opacity 175ms;
            }
            .timepicker-canvas line
            {
                stroke: #00bcd4;
                stroke-width: 4;
                stroke-linecap: round;
            }
            
            .timepicker-canvas-out
            {
                opacity: .25;
            }
            
            .timepicker-canvas-bearing
            {
                stroke: none;
                fill: #00bcd4;
            }
            
            .timepicker-canvas-bg
            {
                stroke: none;
                fill: #00bcd4;
            }
            
            /* Footer */
            .timepicker-footer
            {
                display: -webkit-box;
                display: -webkit-flex;
                display:    -moz-box;
                display: -ms-flexbox;
                display:         flex;
            
                margin: 0 auto;
                padding: 5px 1rem;
            
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                   -moz-box-pack: justify;
                -ms-flex-pack: justify;
                        justify-content: space-between;
            }
            
            .timepicker-clear
            {
                color: #ff5252;
            }
            
            .timepicker-close
            {
                color: #00bcd4;
            }
            
            .timepicker-clear,
            .timepicker-close
            {
                padding: 0 20px;
            }
            
            /* Media Queries */
            @media only screen and (min-width: 601px)
            {
                .timepicker-modal
                {
                    max-width: 600px;
                }
                .timepicker-container.modal-content
                {
                            flex-direction: row;
            
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                       -moz-box-orient: horizontal;
                       -moz-box-direction: normal;
                        -ms-flex-direction: row;
                }
                .timepicker-text-container
                {
                    top: 32%;
                }
                .timepicker-display-am-pm
                {
                    position: relative;
                    right: auto;
                    bottom: auto;
            
                    margin-top: 1.2rem;
            
                    text-align: center;
                }
            }







    // Style CSS
    select
    {
        width: 100%;
        height: 3rem;
        padding: 5px;
    
        border: none;
        border-bottom: 1px solid #bdbdbd;
        border-radius: 2px;
        background-color: transparent;
    }
    
    .container
    {
        width: 100%;
        max-width: 100% !important;
        margin: 0 auto;
        padding: 0 .5rem;
    }
    .container .dropdown-settings i.right
    {
        margin-left: 0;
    }
    
    @media only screen and (min-width: 601px)
    {
        .container
        {
            width: 100%;
        }
    }
    
    @media only screen and (min-width: 993px)
    {
        .container
        {
            width: 100%;
        }
        .sidenav-overlay
        {
            background-color: transparent;
        }
    }
    
    @media only screen and (min-width: 993px)
    {
        #main
        {
            padding-left: 220px;
        }
        #main.main-full
        {
            padding-left: 64px;
        }
        footer
        {
            padding-left: 250px;
        }
    }
    
    @media only screen and (max-width: 600px)
    {
        #main .content-wrapper-before
        {
            top: 56px;
        }
    }
    
    
    
    .height-100vh
    {
        height: 100vh;
    }
    
    button,
    html [type='button'],
    [type='reset'],
    [type='submit']
    {
        cursor: pointer;
    
        -webkit-appearance: none;
    }
    
    /*----------------------------------------
      Helper Classes
    ------------------------------------------*/
    
    
    .m-0
    {
        margin: 0 !important;
    }
    
    /* Margin Top */
    .mt-0
    {
        margin-top: 0 !important;
    }
    
    .mt-1
    {
        margin-top: 1% !important;
    }
    
    .mt-2
    {
        margin-top: 2% !important;
    }
    
    .mt-3
    {
        margin-top: 3% !important;
    }
    
    .mt-4
    {
        margin-top: 4% !important;
    }
    
    .mt-5
    {
        margin-top: 5% !important;
    }
    
    .mt-6
    {
        margin-top: 6% !important;
    }
    
    .mt-7
    {
        margin-top: 7% !important;
    }
    
    .mt-8
    {
        margin-top: 8% !important;
    }
    
    .mt-9
    {
        margin-top: 9% !important;
    }
    
    .mt-10
    {
        margin-top: 10% !important;
    }
    
    /* Margin Right */
    .mr-0
    {
        margin-right: 0 !important;
    }
    
    .mr-1
    {
        margin-right: 1% !important;
    }
    
    .mr-2
    {
        margin-right: 2% !important;
    }
    
    .mr-3
    {
        margin-right: 3% !important;
    }
    
    .mr-4
    {
        margin-right: 4% !important;
    }
    
    .mr-5
    {
        margin-right: 5% !important;
    }
    
    .mr-6
    {
        margin-right: 6% !important;
    }
    
    .mr-7
    {
        margin-right: 7% !important;
    }
    
    .mr-8
    {
        margin-right: 8% !important;
    }
    
    .mr-9
    {
        margin-right: 9% !important;
    }
    
    .mr-10
    {
        margin-right: 10% !important;
    }
    
    /* Margin Left */
    .ml-0
    {
        margin-left: 0 !important;
    }
    
    .ml-1
    {
        margin-left: 1% !important;
    }
    
    .ml-2
    {
        margin-left: 2% !important;
    }
    
    .ml-3
    {
        margin-left: 3% !important;
    }
    
    .ml-4
    {
        margin-left: 4% !important;
    }
    
    .ml-5
    {
        margin-left: 5% !important;
    }
    
    .ml-6
    {
        margin-left: 6% !important;
    }
    
    .ml-7
    {
        margin-left: 7% !important;
    }
    
    .ml-8
    {
        margin-left: 8% !important;
    }
    
    .ml-9
    {
        margin-left: 9% !important;
    }
    
    .ml-10
    {
        margin-left: 10% !important;
    }
    
    /* Margin Bottom */
    .mb-0
    {
        margin-bottom: 0 !important;
    }
    
    .mb-1
    {
        margin-bottom: 1% !important;
    }
    
    .mb-2
    {
        margin-bottom: 2% !important;
    }
    
    .mb-3
    {
        margin-bottom: 3% !important;
    }
    
    .mb-4
    {
        margin-bottom: 4% !important;
    }
    
    .mb-5
    {
        margin-bottom: 5% !important;
    }
    
    .mb-6
    {
        margin-bottom: 6% !important;
    }
    
    .mb-7
    {
        margin-bottom: 7% !important;
    }
    
    .mb-8
    {
        margin-bottom: 8% !important;
    }
    
    .mb-9
    {
        margin-bottom: 9% !important;
    }
    
    .mb-10
    {
        margin-bottom: 10% !important;
    }
    
    /* Padding All */
    .padding-1
    {
        padding: 1% !important;
    }
    
    .padding-2
    {
        padding: 2% !important;
    }
    
    .padding-3
    {
        padding: 3% !important;
    }
    
    .padding-4
    {
        padding: 4% !important;
    }
    
    .padding-5
    {
        padding: 5% !important;
    }
    
    .padding-6
    {
        padding: 6% !important;
    }
    
    .padding-7
    {
        padding: 7% !important;
    }
    
    .padding-8
    {
        padding: 8% !important;
    }
    
    .padding-9
    {
        padding: 9% !important;
    }
    
    .padding-10
    {
        padding: 10% !important;
    }
    
    .p-0
    {
        padding: 0 !important;
    }
    
    /* Padding Top */
    .pt-0
    {
        padding-top: 0 !important;
    }
    
    .pt-1
    {
        padding-top: 1% !important;
    }
    
    .pt-2
    {
        padding-top: 2% !important;
    }
    
    .pt-3
    {
        padding-top: 3% !important;
    }
    
    .pt-4
    {
        padding-top: 4% !important;
    }
    
    .pt-5
    {
        padding-top: 5% !important;
    }
    
    .pt-6
    {
        padding-top: 6% !important;
    }
    
    .pt-7
    {
        padding-top: 7% !important;
    }
    
    .pt-8
    {
        padding-top: 8% !important;
    }
    
    .pt-9
    {
        padding-top: 9% !important;
    }
    
    .pt-10
    {
        padding-top: 10% !important;
    }
    
    /* Padding Right */
    .pr-0
    {
        padding-right: 0 !important;
    }
    
    .pr-1
    {
        padding-right: 1% !important;
    }
    
    .pr-2
    {
        padding-right: 2% !important;
    }
    
    .pr-3
    {
        padding-right: 3% !important;
    }
    
    .pr-4
    {
        padding-right: 4% !important;
    }
    
    .pr-5
    {
        padding-right: 5% !important;
    }
    
    .pr-6
    {
        padding-right: 6% !important;
    }
    
    .pr-7
    {
        padding-right: 7% !important;
    }
    
    .pr-8
    {
        padding-right: 8% !important;
    }
    
    .pr-9
    {
        padding-right: 9% !important;
    }
    
    .pr-10
    {
        padding-right: 10% !important;
    }
    
    /* Padding Right */
    .pl-0
    {
        padding-left: 0 !important;
    }
    
    .pl-1
    {
        padding-left: 1% !important;
    }
    
    .pl-2
    {
        padding-left: 2% !important;
    }
    
    .pl-3
    {
        padding-left: 3% !important;
    }
    
    .pl-4
    {
        padding-left: 4% !important;
    }
    
    .pl-5
    {
        padding-left: 5% !important;
    }
    
    .pl-6
    {
        padding-left: 6% !important;
    }
    
    .pl-7
    {
        padding-left: 7% !important;
    }
    
    .pl-8
    {
        padding-left: 8% !important;
    }
    
    .pl-9
    {
        padding-left: 9% !important;
    }
    
    .pl-10
    {
        padding-left: 10% !important;
    }
    
    /* Padding Bottom */
    .pb-0
    {
        padding-bottom: 0 !important;
    }
    
    .pb-1
    {
        padding-bottom: 1% !important;
    }
    
    .pb-2
    {
        padding-bottom: 2% !important;
    }
    
    .pb-3
    {
        padding-bottom: 3% !important;
    }
    
    .pb-4
    {
        padding-bottom: 4% !important;
    }
    
    .pb-5
    {
        padding-bottom: 5% !important;
    }
    
    .pb-6
    {
        padding-bottom: 6% !important;
    }
    
    .pb-7
    {
        padding-bottom: 7% !important;
    }
    
    .pb-8
    {
        padding-bottom: 8% !important;
    }
    
    .pb-9
    {
        padding-bottom: 9% !important;
    }
    
    .pb-10
    {
        padding-bottom: 10% !important;
    }
    
    /* Minimum Height */
    .min-height-100
    {
        min-height: 100px !important;
    }
    
    .min-height-150
    {
        min-height: 150px !important;
    }
    
    .min-height-200
    {
        min-height: 200px !important;
    }
    
    .min-height-250
    {
        min-height: 250px !important;
    }
    
    .min-height-300
    {
        min-height: 300px !important;
    }
    
    @media (min-width: 576px)
    {
        .left-align-sm
        {
            text-align: left !important;
        }
        .right-align-sm
        {
            text-align: right !important;
        }
        .center-align-sm
        {
            text-align: center !important;
        }
    }
    
    @media (min-width: 768px)
    {
        .left-align-md
        {
            text-align: left !important;
        }
        .right-align-md
        {
            text-align: right !important;
        }
        .center-align-md
        {
            text-align: center !important;
        }
    }
    
    @media (min-width: 992px)
    {
        .left-align-lg
        {
            text-align: left !important;
        }
        .right-align-lg
        {
            text-align: right !important;
        }
        .center-align-lg
        {
            text-align: center !important;
        }
    }
    
    @media (min-width: 1200px)
    {
        .left-align-xl
        {
            text-align: left !important;
        }
        .right-align-xl
        {
            text-align: right !important;
        }
        .center-align-xl
        {
            text-align: center !important;
        }
    }
    
    .text-lowercase
    {
        text-transform: lowercase !important;
    }
    
    .text-uppercase
    {
        text-transform: uppercase !important;
    }
    
    .text-capitalize
    {
        text-transform: capitalize !important;
    }
    
    /* Icon Background Round */
    .background-round
    {
        padding: 15px;
    
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .18);
    }
    
    /* opacity 0 */
    .opacity-0
    {
        opacity: 0;
    }
    
    /* Border None & Shadow None */
    .border-none
    {
        border-top: none !important;
        border-right: none !important;
        border-bottom: none !important;
        border-left: none !important;
    }
    
    .box-shadow-none
    {
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
    
    /* Margin 0 & Padding 0 */
    .no-margin
    {
        margin: 0 !important;
    }
    
    .no-padding
    {
        padding: 0 !important;
    }
    
    /* Position */
    .position-absolute
    {
        position: absolute;
    }
    
    .position-none
    {
        position: unset;
    }
    
    /* Vertical Align */
    .vertical-align-center
    {
        position: absolute;
        top: 50%;
    
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    
    .vertical-align-bottom
    {
        vertical-align: bottom;
    }
    
    .vertical-align-super
    {
        vertical-align: super;
    }
    
    .vertical-text-top
    {
        vertical-align: text-top !important;
    }
    
    .vertical-text-sub
    {
        vertical-align: sub;
    }
    
    .vertical-text-middle
    {
        vertical-align: middle;
    }
    
    .height-100vh
    {
        height: 100vh;
    }
    
    /* Line Height */
    .line-height-0
    {
        line-height: 0 !important;
    }
    
    /* Icon Background */
    .icon-bg-circle
    {
        padding: .4rem;
    
        color: #fff;
        border-radius: 50%;
    }
    
    .text-shadow
    {
        text-shadow: -1px 2px 4px black;
    }
    
    .display-none
    {
        display: none;
    }
    
    .display-inline
    {
        display: inline;
    }
    
    .display-block
    {
        display: block;
    }
    
    .display-grid
    {
        display: grid;
    }
    
    .display-flex
    {
        display: -webkit-box;
        display: -webkit-flex;
        display:    -moz-box;
        display: -ms-flexbox;
        display:         flex;
    }
    
    .float-none
    {
        float: none !important;
    }
    
    .float-left
    {
        float: left !important;
    }
    
    .float-right
    {
        float: right !important;
    }
    
    .float-inherit
    {
        float: inherit !important;
    }
    
    .clear-both
    {
        clear: both;
    }
    
    ul.list-type-bullet
    {
        padding-left: 40px;
    
        list-style-type: inherit;
    }
    ul.list-type-bullet li
    {
        list-style-type: inherit;
    }
    
    .justify-content-end
    {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -moz-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }
    
    .text-ellipsis
    {
        overflow: hidden;
    
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    /*---------------------------------
        Typography
    -----------------------------------*/
    a
    {
        text-decoration: none;
    }
    
    html
    {
        font-family: ${props => props.theme.font}, ${props => props.theme.fontFallback} !important;
        font-weight: normal;
        line-height: 1.5;
    
        color: #6b6f82;
    }
    @media only screen and (min-width: 0)
    {
        html
        {
            font-size: 14px;
        }
    }
    @media only screen and (min-width: 992px)
    {
        html
        {
            font-size: 14.5px;
        }
    }
    @media only screen and (min-width: 1200px)
    {
        html
        {
            font-size: 15px;
        }
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    {
        font-family: ${props => props.theme.font}, ${props => props.theme.fontFallback};
        font-weight: 400;
        line-height: 1.1;
    
        color: #333;
    }
    
    p
    {
        font-family: ${props => props.theme.font}, ${props => props.theme.fontFallback};
    }
    
    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a
    {
        font-weight: inherit;
    }
    
    h1
    {
        font-size: 4.2rem;
        line-height: 110%;
    
        margin: 2.1rem 0 1.68rem 0;
    }
    
    h2
    {
        font-size: 3.56rem;
        line-height: 110%;
    
        margin: 1.78rem 0 1.424rem 0;
    }
    
    h3
    {
        font-size: 2.92rem;
        line-height: 110%;
    
        margin: 1.46rem 0 1.168rem 0;
    }
    
    h4
    {
        font-size: 2.28rem;
        line-height: 110%;
    
        margin: 1.14rem 0 .912rem 0;
    }
    
    h5
    {
        font-size: 1.64rem;
        line-height: 110%;
    
        margin: .82rem 0 .656rem 0;
    }
    
    h6
    {
        font-size: 1.15rem;
        line-height: 110%;
    
        margin: .575rem 0 .46rem 0;
    }
    
    em
    {
        font-style: italic;
    }
    
    strong
    {
        font-weight: 500;
    }
    
    small
    {
        font-size: 75%;
    }
    
    .light
    {
        font-weight: 300;
    }
    
    .thin
    {
        font-weight: 200;
    }
    
    .flow-text
    {
        font-weight: 300;
    }
    @media only screen and (min-width: 360px)
    {
        .flow-text
        {
            font-size: 1.2rem;
        }
    }
    @media only screen and (min-width: 390px)
    {
        .flow-text
        {
            font-size: 1.224rem;
        }
    }
    @media only screen and (min-width: 420px)
    {
        .flow-text
        {
            font-size: 1.248rem;
        }
    }
    @media only screen and (min-width: 450px)
    {
        .flow-text
        {
            font-size: 1.272rem;
        }
    }
    @media only screen and (min-width: 480px)
    {
        .flow-text
        {
            font-size: 1.296rem;
        }
    }
    @media only screen and (min-width: 510px)
    {
        .flow-text
        {
            font-size: 1.32rem;
        }
    }
    @media only screen and (min-width: 540px)
    {
        .flow-text
        {
            font-size: 1.344rem;
        }
    }
    @media only screen and (min-width: 570px)
    {
        .flow-text
        {
            font-size: 1.368rem;
        }
    }
    @media only screen and (min-width: 600px)
    {
        .flow-text
        {
            font-size: 1.392rem;
        }
    }
    @media only screen and (min-width: 630px)
    {
        .flow-text
        {
            font-size: 1.416rem;
        }
    }
    @media only screen and (min-width: 660px)
    {
        .flow-text
        {
            font-size: 1.44rem;
        }
    }
    @media only screen and (min-width: 690px)
    {
        .flow-text
        {
            font-size: 1.464rem;
        }
    }
    @media only screen and (min-width: 720px)
    {
        .flow-text
        {
            font-size: 1.488rem;
        }
    }
    @media only screen and (min-width: 750px)
    {
        .flow-text
        {
            font-size: 1.512rem;
        }
    }
    @media only screen and (min-width: 780px)
    {
        .flow-text
        {
            font-size: 1.536rem;
        }
    }
    @media only screen and (min-width: 810px)
    {
        .flow-text
        {
            font-size: 1.56rem;
        }
    }
    @media only screen and (min-width: 840px)
    {
        .flow-text
        {
            font-size: 1.584rem;
        }
    }
    @media only screen and (min-width: 870px)
    {
        .flow-text
        {
            font-size: 1.608rem;
        }
    }
    @media only screen and (min-width: 900px)
    {
        .flow-text
        {
            font-size: 1.632rem;
        }
    }
    @media only screen and (min-width: 930px)
    {
        .flow-text
        {
            font-size: 1.656rem;
        }
    }
    @media only screen and (min-width: 960px)
    {
        .flow-text
        {
            font-size: 1.68rem;
        }
    }
    @media only screen and (max-width: 360px)
    {
        .flow-text
        {
            font-size: 1.2rem;
        }
    }
    
    @media only screen and (max-width: 768px)
    {
        .nav-expanded .brand-sidebar
        {
            background: transparent !important;
        }
        .brand-sidebar .logo-wrapper
        {
            padding: 17px 18px !important;
    
            text-align: center;
    
            background: transparent;
        }
    }
    
    .small
    {
        font-size: 1.0rem !important;
    }
    
    .medium-small
    {
        font-size: .9rem !important;
    }
    
    .ultra-small
    {
        font-size: .8rem !important;
    }
    
    small
    {
        font-size: .8rem;
    }
    
    .strong
    {
        font-weight: 600;
    }
    
    h4.header
    {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.508rem;
    
        margin: 1.14rem 0 .912rem 0;
    
        text-transform: uppercase;
    }
    
    h4.header2
    {
        font-size: 1.1rem;
        font-weight: 400;
    
        text-transform: uppercase;
    }
    
    p.title
    {
        font-size: 1.3rem;
    }
    
    p.header
    {
        font-size: 1rem;
        font-weight: 500;
    
        text-transform: uppercase;
    }
    
    li.li-hover:hover
    {
        background: transparent !important;
    }
    
    li.search-out:hover
    {
        background: transparent;
    }
    
    li.mobile:before
    {
        background: #f7464a;
    }
    
    li.kitchen:before
    {
        background: #46bfbd;
    }
    
    li.home:before
    {
        background: #fdb45c;
    }
    
    .more-text
    {
        font-weight: 500;
    
        padding: 5px 20px;
    
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    .valign-demo
    {
        height: 400px;
    
        background-color: #ddd;
    }
    
    .margin
    {
        margin: 0 !important;
    }
    
    .uppercase
    {
        text-transform: uppercase;
    }
    
    /*----------------------------------------
      Grid
    ------------------------------------------*/
    .section
    {
        padding: .5rem 0;
    }
    
    .row
    {
        margin-bottom: 0;
    }
    .row .col
    {
        padding: 0 1rem;
    }
    
    
    /*----------------------------------------
    \tAvatar
    ------------------------------------------*/
    .avatar-status
    {
        line-height: 50px;
    
        position: relative;
    
        display: inline-block;
    
        width: 28px;
    
        vertical-align: bottom;
        white-space: nowrap;
    
        border-radius: 50px;
    }
    .avatar-status i
    {
        position: absolute;
        right: -2px;
        bottom: 18px;
    
        width: 9px !important;
        height: 9px !important;
    
        border: 1px solid #fff;
        border-radius: 100%;
    }
    .avatar-status span.text-circle
    {
        font-size: 1.2rem;
    
        display: table-cell;
    
        text-align: center;
        vertical-align: middle;
    
        color: #fff;
        background: #fafafa;
    }
    .avatar-status img
    {
        width: 100%;
        max-width: 100%;
        height: auto;
    
        border: 0 none;
        border-radius: 1000px;
        background: #e6e6e6;
    }
    
    .avatar-online i
    {
        background-color: #00e676;
    }
    
    .avatar-off i
    {
        background-color: #bdbdbd;
    }
    
    .avatar-busy i
    {
        background-color: #ff1744;
    }
    
    .avatar-away i
    {
        background-color: #ffc400;
    }
    
    
    /*----------------------------------------
    Dropdown
    ------------------------------------------*/
    .dropdown-content li:hover,
    .dropdown-content li.active
    {
        background-color: #eee;
    }
    
    .dropdown-content li > a,
    .dropdown-content li > span
    {
        padding: 14px 24px;
    }
    .dropdown-content li > a:hover,
    .dropdown-content li > a.active,
    .dropdown-content li > span:hover,
    .dropdown-content li > span.active
    {
        background-color: #eee;
    }
    
    .dropdown-content li > a > i
    {
        width: 24px;
        margin: 0 12px 0 0;
    }
    
    /*----------------------------------------
    \tBadges
    ------------------------------------------*/
    span.badge
    {
        color: #fff;
    }
    span.badge.pill
    {
        font-size: .8rem;
        line-height: 20px;
    
        min-width: 1rem;
        height: 20px;
    
        border-radius: 50%;
        border-radius: 9px;
    }
    
    #badges-navbar nav .brand-logo
    {
        font-size: 2.1rem;
    }
    
    /*----------------------------------------
      Material
    ------------------------------------------*/
    
    .material-icons
    {
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        /* Preferred icon size */
    
        display: inline-block;
    
        white-space: nowrap;
        letter-spacing: normal;
        text-transform: none;
        word-wrap: normal;
    
        direction: ltr;
        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
        /* Support for IE. */
        -webkit-font-feature-settings: 'liga';
        -moz-font-feature-settings: 'liga';
        font-feature-settings: 'liga';
    }
    
    /*----------------------------------------
    Cards
    ------------------------------------------*/
    .card
    {
        overflow: hidden;
    
        margin: 1rem 0 1rem 0;
    }
    .card .card-title
    {
        font-size: 18px;
        font-weight: 400;
    
        margin: 0;
    }
    
    
    /*
    * Custom Animations
    */
    @-webkit-keyframes fadeUp
    {
        0%
        {
            -webkit-transform: translateY(30px);
            transform: translateY(30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
    
            opacity: 1;
        }
    }
    @-moz-keyframes fadeUp
    {
        0%
        {
            -moz-transform: translateY(30px);
            transform: translateY(30px);
    
            opacity: 0;
        }
        100%
        {
            -moz-transform: translateY(0px);
            transform: translateY(0px);
    
            opacity: 1;
        }
    }
    @-o-keyframes fadeUp
    {
        0%
        {
            -o-transform: translateY(30px);
            transform: translateY(30px);
    
            opacity: 0;
        }
        100%
        {
            -o-transform: translateY(0px);
            transform: translateY(0px);
    
            opacity: 1;
        }
    }
    @keyframes fadeUp
    {
        0%
        {
            -webkit-transform: translateY(30px);
            -moz-transform: translateY(30px);
            -o-transform: translateY(30px);
            transform: translateY(30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            transform: translateY(0px);
    
            opacity: 1;
        }
    }
    
    .animate.fadeUp
    {
        -webkit-animation: fadeUp;
        -moz-animation: fadeUp;
        -o-animation: fadeUp;
        animation: fadeUp;
        -webkit-animation-duration: 1.5s;
        -moz-animation-duration: 1.5s;
        -o-animation-duration: 1.5s;
        animation-duration: 1.5s;
    
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -o-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    
    @-webkit-keyframes fadeLeft
    {
        0%
        {
            -webkit-transform: translateX(-30px);
            transform: translateX(-30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @-moz-keyframes fadeLeft
    {
        0%
        {
            -moz-transform: translateX(-30px);
            transform: translateX(-30px);
    
            opacity: 0;
        }
        100%
        {
            -moz-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @-o-keyframes fadeLeft
    {
        0%
        {
            -o-transform: translateX(-30px);
            transform: translateX(-30px);
    
            opacity: 0;
        }
        100%
        {
            -o-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @keyframes fadeLeft
    {
        0%
        {
            -webkit-transform: translateX(-30px);
            -moz-transform: translateX(-30px);
            -o-transform: translateX(-30px);
            transform: translateX(-30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateX(0px);
            -moz-transform: translateX(0px);
            -o-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    .animate.fadeLeft
    {
        -webkit-animation: fadeLeft;
        -moz-animation: fadeLeft;
        -o-animation: fadeLeft;
        animation: fadeLeft;
        -webkit-animation-duration: 1.5s;
        -moz-animation-duration: 1.5s;
        -o-animation-duration: 1.5s;
        animation-duration: 1.5s;
    
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -o-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    
    @-webkit-keyframes fadeRight
    {
        0%
        {
            -webkit-transform: translateX(30px);
            transform: translateX(30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @-moz-keyframes fadeRight
    {
        0%
        {
            -moz-transform: translateX(30px);
            transform: translateX(30px);
    
            opacity: 0;
        }
        100%
        {
            -moz-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @-o-keyframes fadeRight
    {
        0%
        {
            -o-transform: translateX(30px);
            transform: translateX(30px);
    
            opacity: 0;
        }
        100%
        {
            -o-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    @keyframes fadeRight
    {
        0%
        {
            -webkit-transform: translateX(30px);
            -moz-transform: translateX(30px);
            -o-transform: translateX(30px);
            transform: translateX(30px);
    
            opacity: 0;
        }
        100%
        {
            -webkit-transform: translateX(0px);
            -moz-transform: translateX(0px);
            -o-transform: translateX(0px);
            transform: translateX(0px);
    
            opacity: 1;
        }
    }
    
    .animate.fadeRight
    {
        -webkit-animation: fadeRight;
        -moz-animation: fadeRight;
        -o-animation: fadeRight;
        animation: fadeRight;
        -webkit-animation-duration: 1.5s;
        -moz-animation-duration: 1.5s;
        -o-animation-duration: 1.5s;
        animation-duration: 1.5s;
    
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -o-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    
    .animation-fast
    {
        -webkit-animation-delay: .1s;
        -moz-animation-delay: .1s;
        -o-animation-delay: .1s;
        animation-delay: .1s;
    }
    
    .animation-slow
    {
        -webkit-animation-delay: 2s;
        -moz-animation-delay: 2s;
        -o-animation-delay: 2s;
        animation-delay: 2s;
    }
    
    .delay-1
    {
        -webkit-animation-delay: .3s !important;
        -moz-animation-delay: .3s !important;
        -o-animation-delay: .3s !important;
        animation-delay: .3s !important;
    }
    
    .delay-2
    {
        -webkit-animation-delay: .4s !important;
        -moz-animation-delay: .4s !important;
        -o-animation-delay: .4s !important;
        animation-delay: .4s !important;
    }
    
    .delay-3
    {
        -webkit-animation-delay: .5s !important;
        -moz-animation-delay: .5s !important;
        -o-animation-delay: .5s !important;
        animation-delay: .5s !important;
    }
    
    .delay-4
    {
        -webkit-animation-delay: .6s !important;
        -moz-animation-delay: .6s !important;
        -o-animation-delay: .6s !important;
        animation-delay: .6s !important;
    }
    
    .delay-5
    {
        -webkit-animation-delay: .7s !important;
        -moz-animation-delay: .7s !important;
        -o-animation-delay: .7s !important;
        animation-delay: .7s !important;
    }
    
    .collapsible-header.cyan {
        color: #fff;
    }
    .panel--box{
        min-height: 500px;
        padding: 30px;
    }
    .menu--list li{
        background: #eee;
        padding: 10px;
        margin-bottom: 4px;
    }
    .menu--list span{
        color:#333;
    }
    .right--button a{
        margin: 0px 10px;
    }
    .dropdown-content li > a, .dropdown-content li > span {
        color: #957bb3 !important;
    }
    .select-wrapper input.select-dropdown:focus {
        border-bottom: 1px solid #8d62c1 !important;
        box-shadow: 0 1px 0 0 #8d62c1 !important;
    }
    .tab--content{
        padding:30px 30px 60px;
    }
    .media-image {
        margin-bottom: 10px;
        height: 115px;
        width: 115px;
        overflow: hidden;
        line-height: 115px;
    }
    .media-image.selected {
        border: 1px solid #6b4994;
    }
    .media-image img {
        width: 100%;
        vertical-align: middle;
        display: inline-block;
    }
    .media-image.selected img {
        opacity: 0.8;
    }
    .permission--box span{
        margin-right: 15px
    }
    .collapsible-header{
        color: #000;
    }
    
    
    
    
    
    // Color CSS
    .gradient-45deg-purple-deep-orange {
        background: #9c27b0!important;
        box-shadow: 3px 3px 4px 0 rgb(78, 51, 113);
    }
    .gradient-45deg-purple-deep-orange:hover,.gradient-45deg-purple-deep-orange:focus
    {
        background:#6b4994;
    }
    
    .gradient-45deg-purple-deep-orange.gradient-shadow
    {
        -webkit-box-shadow: 0 6px 20px 0 rgba(255, 110, 64, .5) !important;
                box-shadow: 0 6px 20px 0 rgba(255, 110, 64, .5) !important;
    }
    .purple
    {
        background-color: #9c27b0 !important;
    }
    .cyan
    {
        background-color: #00bcd4 !important;
    }
    .green
    {
        background-color: #4caf50 !important;
    }
    .yellow
    {
        background-color: #ffeb3b !important;
    }
    .amber
    {
        background-color: #ffc107 !important;
    }
    .orange
    {
        background-color: #ff9800 !important;
    }
    .pagination--top span{
        font-size:12px;
    }
   .edit--page .input-field.col label {
        transform: translateY(-14px) scale(.8);
    }
    .edit--page .select-wrapper + label {
        position: absolute;
        top: -2px;
    }
    .date-field p{
        margin-bottom:0px;
    }
    textarea.auto--height.materialize-textarea{
        min-height:auto;
    }
    h5{
        margin-bottom:30px;
    }
    ul.pagination.theme--pagination.right {
        margin-left: 6px;
        margin-top: -6px !important;
        vertical-align: middle;
        margin-bottom: 0px !important;
    }
    #notifications-dropdown.dropdown-content{
        width: 310px !important;
        right: 58px !important;
        left: auto !important;
        top: 64px !important;
    }
    #profile-dropdown.dropdown-content{
        width: 160px !important;
        right: 13px !important;
        left: auto !important;
        top: 64px !important;
    }
    .edit--page .input-field > label{
        font-size:1rem;
    }
    .material-editor .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-top: -1px;
        right: 0;
        top: 50%;
        width: 18px;
    }
    .material-editor .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        font-size: 12px;
        font-weight: 500;
        height:8px;
        position: relative;
        vertical-align: middle;
    }
    .material-editor .select-wrapper input.select-dropdown {
        font-size: 12px;
        line-height: 1rem;
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        height: 1rem;
        margin-bottom:0px;
    }
    .material-editor .select-wrapper {
        border: 1px solid #ccc;
    }
    .quill.material-editor {
        margin-top: 22px;
    }
    .material-editor .ql-toolbar.ql-snow .ql-formats {
        margin-right: 5px;
        width: auto;
    }
    .material-editor .ql-container{
        min-height:200px;
    }

    input:not([type]):focus:not([readonly]), input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #9b75cc;
        -webkit-box-shadow: 0 1px 0 0 #9b75cc;
        box-shadow: 0 1px 0 0 #9b75cc;
    }
    input:not([type]):focus:not([readonly]) + label, input[type=text]:not(.browser-default):focus:not([readonly]) + label, input[type=password]:not(.browser-default):focus:not([readonly]) + label, input[type=email]:not(.browser-default):focus:not([readonly]) + label, input[type=url]:not(.browser-default):focus:not([readonly]) + label, input[type=time]:not(.browser-default):focus:not([readonly]) + label, input[type=date]:not(.browser-default):focus:not([readonly]) + label, input[type=datetime]:not(.browser-default):focus:not([readonly]) + label, input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label, input[type=tel]:not(.browser-default):focus:not([readonly]) + label, input[type=number]:not(.browser-default):focus:not([readonly]) + label, input[type=search]:not(.browser-default):focus:not([readonly]) + label, textarea.materialize-textarea:focus:not([readonly]) + label {
        color: #9b75cc;
    }
    .input-field .prefix.active {
        color: #9b75cc;
    }
    .media-overlay{
        border: 2px solid blue;
    }

    /*tabs*/

        .theme__tabs .tab a {
        color: #333333 !important;
        font-weight: 600;
        padding: 0 10px;
        font-size: 12px;
        }
        .theme__tabs .tab a:hover,
        .theme__tabs .tab a.active {
        color: #6b4994 !important;
        }
        .theme__tabs .tab a:focus,
        .theme__tabs .tab a:focus.active {
        background-color: transparent !important;
        }
        .theme__tabs.tabs {
        height: 40px;
        }
        .theme__tabs .tab {
        line-height: 40px;
        height: 40px;
        }
        .filter--bar .tabs {
        background-color: transparent !important;
        margin-bottom: 15px;
        }
        /*select*/

        .theme--select .select-wrapper input.select-dropdown {
        height: 16px;
        line-height: 21px;
        font-size: 14px;
        padding: 0 0 3px;
        }
        .theme--select .select-wrapper input.select-dropdown:focus {
        border-bottom: 1px solid #6b4994 !important;
        }
        .theme--select .dropdown-content li > a,
        .theme--select .dropdown-content li > span {
        color: #6b4994 !important;
        font-size: 12px;
        line-height: 12px;
        padding: 10px 12px;
        }
        .theme--select .dropdown-content li {
        min-height: 32px;
        }
        .filter--bar .input-field {
        margin-bottom: 0px;
        }

        /*btn*/

        .btn--bar .btn {
        font-size: 10px;
        box-shadow: none !important;
        height: 16px;
        line-height: 16px;
        border-right: 1px solid #969292 !important;
        border-radius: 0;
        color: #333 !important;
        background-color: transparent !important;
        vertical-align: text-bottom;
        }
        .btn--bar .btn i {
        font-size: 12px;
        }
        .theme--btn {
        background-color: #6b4994 !important;
        }
        .theme--btn:hover {
        background-color: #8d62c1 !important;
        }
        span.badge-secondary {
        color: #333;
        font-size: 11px;
        font-weight: bold;
        }
        .theme--select {
        margin-top: 10px;
        }
        .filter--bar {
        margin-top:0px;
        }
        i.fa, i.fas {
        margin-right: 3px;
        }
        .info-unit {
        margin-right: 2px;
        }
        .leads-table select{
        height: 2rem;
        padding: 0px;
        }
        .leads-table a,.leads-table small {
            font-size: 11px !important;
        }
        th.info-col {
            width: 8%;
        }
        /*leads table*/

        .table thead th {
        vertical-align: middle;
        border-bottom: 1px solid #d5d6d7 !important;
        padding: 0.4rem 3px;
        }
        .col-sub-heading {
        display: inline-block;
        position: relative;
        }
        .sortable-icon {
        color: #bababa;
        }
        .info-unit a{
        font-size: 9px !important;
        }
        .sortMenu {
        position: absolute;
        background: #fff;
        box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent, 0 2px 15px rgba(0, 0, 0, 0.3);
        padding: 10px;
        min-width: 100px;
        z-index: 1;
        color: #999;
        display: none;
        }
        .leads-table th {
        font-size: 0.75rem;
        color: gray;
        }
        .col-sub-heading:hover .sortMenu {
        display: block;
        }
        .name-col {
        width: 10%;
        }
        .v-line {
        border-left: 1px solid #ccc;
        height: 20px;
        margin: 0 5px;
        }
        .table a {
        font-size: 12px;
        }
        .status-dlg {
        line-height: 12px;
        }
        .leads-table td .info-unit a {
        cursor: pointer;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.87);
        }
        .leads-table td .info-unit a:hover {
        color: #038cb8;
        }
        .table-custom tr td {
        border: 0px !important;
        padding: 0;
        }
        .info-unit small {
        font-size: 12px;
        }
        .table-custom tr {
        border: none !important;
        }
        .table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
        }

        /* page table */

        .data-table th,
        .data-table td {
        padding: 6px !important;
        }
        .data-table {
        font-size: 11px;
        }
        .filter--bar .theme__tabs .tab a{
          font-size: 11px;
          font-weight: bold;
        }
        .filter--bar select {
            display: block;
            height: 2rem !important;
            font-size: 12px;
            border: 1px solid #ccc !important;
        }
        .filter--bar .theme--select {
            margin-top: 5px;
        }
        .navbar .navbar--theme{
            background:#ffff !important;
        }
        .data-table .btn-small i{
            margin-right:0px;
        }
        table,td,th{
          font-size: 11px;
        }
        .notification-button .notifications-badge {
            background-color: #9c27b0 !important;
            box-shadow: 0 0 10px 0 #9c27b0 !important;
        }
        .select-wrapper input.select-dropdown {
            font-size: 12px !important;
        }
        #main input{
            font-size:12px !important
        }
        textarea.materialize-textarea{
            font-size:12px;
        }
        .panel .btn.gradient-45deg-purple-deep-orange {
            font-size: 11px;
            line-height: 30px;
            height: 30px;
            padding: 0px 15px;
        }

`
