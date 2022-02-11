const NotepadBody = () => {
    return (
        <div id="np-body">
            <p style={textStyling}>                                  _ _ _</p>
            <p style={textStyling}>                               ^(- )- \---^-</p>
            <p style={textStyling}>                        ^--^-/              \-^-]-\--</p>
            <p style={textStyling}>                     -/          //                 - --\/</p>
            <p style={textStyling}>                  -/-           //         _//_          ---/</p>
            <p style={textStyling}>                 -            _//_  _       \\    //         )[</p>
            <p style={textStyling}>            _  -(     \\    -------- \      //_ _//_ _       -.-</p>
            <p style={textStyling}>             (-        \()           \\    / ---------        /-</p>
            <p style={textStyling}>             )\\--     (\\                //_    \\        )  -)--</p>
            <p style={textStyling}>              -\\                )     \\//              (/     ./</p>
            <p style={textStyling} className="staticTreeLine">            -.        _ _ _(     _ _ _ / \       o{"<"}  </p>
            <p style={textStyling} id="animateBird"></p>
            <p style={textStyling}>             \        ----      -----// . \_ _ _/\_             \-</p>
            <p style={textStyling}>             ).        (              [      ------         //-\</p>
            <p style={textStyling}>               (-     (         __    /   /               \-/.</p>
            <p style={textStyling}>              --          _ _  //\\  /   -\  //              --/</p>
            <p style={textStyling}>               -          - -\/    \/        /            \--.-</p>
            <p style={textStyling}>              )\             \/     | -     |/              -/</p>
            <p style={textStyling}>                --                  \             _      _\  \</p>
            <p style={textStyling}>                /  _    _   _      \/_      /_- /  _\ ./-</p>
            <p style={textStyling}>                --   -.    /    \ /      .  |</p>
            <p style={textStyling}>                                 /         \\</p>
            <p style={textStyling}>                               /   -         |\</p>
            <p style={textStyling}>                                       -      /</p>
            <p style={textStyling}>                               ]   /         /</p>
            <p style={textStyling}>                               \     \      \</p>
            <p style={textStyling}>                               /           /_ _</p>
            <p style={textStyling}>                                | -       \    \</p>
            <p style={textStyling}>                                 {"//"}            /_</p>
            <p style={textStyling}>                                |_   /         \/</p>
            <p style={textStyling} className='staticTreeLine'>                              /| \    .    -     ]            </p>
            <p style={textStyling} id="animateDialog"></p>
            <p style={textStyling}>                               /           _     \\</p>
            <p style={textStyling} id="animateHead">                              \\         /       //</p>
            <p style={textStyling} id="animateBody">                              /  .                |O</p>
            <p style={textStyling} id="animateLegs">                             |-  -                \{"<"}\{">"}_//\</p>
            <p style={textStyling}>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ^^ ^^    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p>
        </div>
    )
}

export default NotepadBody;

const textStyling = {
    marginLeft: '5px',
    marginTop: '0px',
    fontSize: '16px',
    fontFamily: 'Consolas',
    fontWeight: 'bold',
    whiteSpace: 'pre',
}