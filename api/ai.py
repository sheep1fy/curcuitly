inp = input("What product would you like help with finding? ").lower()

if inp in ["mic", "microphone"]:
    mic = int(input("What is your budget? ($) "))

    if mic <= 100:
        print("Recommended option: FIFINE A6V")
    elif mic <= 200:
        print("Recommended option: Audio-Technica AT2020 (XLR)")
    elif mic <= 300:
        print("Recommended option: Rode NT1 (5th Gen)")
    else:
        print("You can buy most mics lol")

elif inp in ["audio", "speaker"]:
    aud = int(input("What is your budget? ($) "))

    if aud <= 100:
        print("Recommended option: Ultimate Ears WONDERBOOM 4")
    elif aud <= 200:
        print("Recommended option: JBL Charge 6")
    elif aud <= 300:
        print("Recommended option: Sony ULT FIELD 3")
    else:
        print("You can buy most speakers lol")

else:
    print("Invalid option, please try again.")
