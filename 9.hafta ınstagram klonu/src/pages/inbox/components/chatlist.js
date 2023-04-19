import { NavLink, useParams } from "react-router-dom";
import classNames from "classnames";

export default function ChatList() {
  const { conversationId } = useParams();
  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://media.licdn.com/dms/image/C5603AQEBMWyU6sUlqA/profile-displayphoto-shrink_800_800/0/1550515660543?e=2147483647&v=beta&t=C9Ef-ISICc7d1oamRRShsfQoU6GvaGTyyx6naZc9D60",
        name: "Eyüp Kumaşoğlu",
      },
      lastMessage: "İHA kralı kardeşim :)",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1391038704110669830/POQDXK0Y_400x400.jpg",
        name: "Eray Asma",
      },
      unread: true,
      lastMessage: "Hesaplarımdan takip etmeyi unutmayın :)",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://platform.uretkenakademi.com/wp-content/uploads/2022/05/cropped-uretken-akademi-favicon-1.png",
        name: "Üretken Akademi",
      },
      lastMessage: "Selamlar,Yazılımcı Fabrikası...",
    },
    {
      id: 4,
      user: {
        avatar:
          "data:image/png;base64,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",
        name: "Esenler Belediyesi",
      },
      lastMessage: "Esenler Belediyesi Resmi Insta...",
    },
    {
      id: 5,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1622656211194716171/Yta_Q-wh_400x400.jpg",
        name: "Esenler Gençlik Ve Spor",
      },
      lastMessage: "Etkinliklerimiz tüm hızıyla devam etmektedir.",
    },
    {
      id: 6,
      user: {
        avatar: 
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        name: "Baran Sönmez",
      },
      lastMessage: "Görüşürüz kanka",
    },
    {
      id: 7,
      user: {
        avatar: 
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUPDxAPEA8PDw8QDw8VEBUQEBUQFRUWFhUVFRUYHSggGBomHRUVITEhJSkrLi4vFx81ODMtNygtLisBCgoKDg0OGhAQGi4dHSUtLS0tLS0tLSstLS0tKy0tLS0tLS0vLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcCAwUEAQj/xABNEAABAwIABwgLDgUEAwAAAAABAAIDBBEFBgchMUFxElFhgZGTsdETFiIyQlNykrKz0hQXIzQ1Q0RUYnN0goOhJDNSwcOiwtPwJWPx/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAMEBQIGAQf/xAA9EQABAwIBCAUKBAcBAAAAAAABAAIDBBEFITFRcYGRodESQWGxwQYTFBUiMjNysvAjQtLhQ1JigpKi8TT/2gAMAwEAAhEDEQA/ALxREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCEREQhEREIRERCERcfDGMNNSZppQH2uIm93IfyjQOE2CiNdlKJzU9OANTpXXPmN9pdsjc7ME+OmlkF2tyaepWMiqWTH+uOgwt2RdZKw7eq7xjOaanijkOhMNFKM9t6t1FUvbzX+MZzTepDjzX+MZzTepM9Xy6Rx5Jfoz+xW0iqPt6wh4xnNN6l8OPeEPGs5pvUj1fLpHHkj0d/YrdRVAcfMIeNZzTVicfMIeMj5pvUj1fLpHHkj0dyuFFTpx+wh42PmmLE4/4R8bHzTOpHq+XSOPJHo7+xXIipo5QMI+Nj5pnUs48ouEG6TA/gdF7JCPV8vZ97Eejv7FcSKtcHZUDe1TTZtb4nZ/Mf7SmeBMYqWtH8PK1zgLmM9xINrTntwjMp5KeSPK4eKW6Nzc4XXRESVwiIiEIiIhCIiIQiIiEIiIhC+E2Vb434+m5gonDNcPqBnvviLg+1yaimUnGkgmhgdbN/EPB3/mwdmd20DfVcAoBF16DDsLBYJpRnzDs0nwG0re6QuJc4lznG5cTck75J0lfQVpBWYKrY9akjFtBWQK6eCMW6urAMUJ3B+cd3DNoJ77iupRS5NZDnlqY2nW1kZf8A6iR0KgTtbnKzJ5YmGznC6g4KyVhDJsz6y/m29a++9uz60/mm9ac2tiGc8FC6oiOY8FXhCxIVje9wz60/m29a+e9uz60/m29aZ6dBp4FL8+zSq3IWJCsn3tmfWn823rXz3tGfWn82OtHp0GngUefZpVakL4QrKOTRn1p/NjrXz3so/rL+aHWj06DTwK+efZpVZkLEhWPUZMD83V5950X9w7+yj2FcR66nBd2MTMHhRHsht5BAdyArptVC42DvDvsuhKw9aixCyje5rg5pLXNN2uaS1wO+CM4K+ubq1g2I4d5YEJ6YrHxNx/LiKeucM9hHU6BfUJdQ8rl31ZS/NhCszJpjSX2oZ3XcB/DPJzloGeM8IGccAI1BZdXSADpsGseIUk0Vh0grHREWapkREQhEREIRERCEXJxkwmKSlknNi5jSIwdchzMGy55LrrKt8r+ECI4qcHM5zpXflG5b0v5FxI7otJVmH0wqalkRzE5dQFzwCraWZz3l7ySXvJc46S5xuSeEklfAVqBWYKnY9foD416IY3PcGMaS5xDWtAu4uOgAayrRxUxEjhAlqw2WbMREe6iZt1Od+29vrHJri2IYxWSt+Flb8CD4MR8LgLui2+VKcN4Wio4jNMbAZmtGdz3HQ1o1n/6cyraTZeRxKvdJIYINNsmcnQOzv1LpZgN4DksuJXY2UMBs+pYXDMWsvKb7x3ANuNVbjDjXUVriHOMcF+5haTubfaPhnbm3gFxGlNYwHOuI8HIF5TsHP9lcPb7QeMk5py+9vtB4x/NOVPgrIFUNgjOlDsNiHWd45K3+3yg8ZJzT+pfe3mg8ZJzTupVCCswU9tFCes7xySHUTBp+9itvt5oPGSc07qXzt7oPGSc07qVTr4Qm+r4dJ3jkkmnarY7fKDxknMv6k7fcH+Mk5l/UqmIWBCPV0Wk7xyXz0diuGmx2we827PuD9tj2DziLfuu7TVDJGh8b2vYdDmkOadhC/P5C9eDMKz0j+yQSOYdY0sdwOboKXJhzbew7f+3Irl1MOoq2cZMU6etBcQI57dzO0d1wB48Mbc+8QqhwzgmaklMUzbOGdrhna9upzTrCtvFTGmOvbuSBHUMF3x3zEf1M3xwaRyE+nGrATK+Axmwlbd0Mmtr+H7J0Ef3ASIKh8DuhJm7u0JbHujPRcqKIWcMro3tkY4texzXscNIc03B5VnUQOje6N7S17HFr2nSHA2IWohbCsV/Yv4UbV00dQ2w7IwFzR4Lxme3icCF0lXuSKtJimpyf5cjJW7JAQQONl/zKwl56aPzchb99nBZz29FxCIiJS5RERCEREQhFT+V916yPebTMzbXyEq4FTuWE/wAbH+HZ6UqlqzaPat7ybF64fK5QgFdnFLBnuusjhI7gv3Un3bc55QFxAVYeRyC880p8GJrOccCfQUsJ6TgNK9dikhgpZJBkIGTWcg4lWs1oAsMwGgarKkcdsPmtqTZ3wMRcyEeCQMxftcRe+9uVa2NtZ2CiqJL2IhcAdYc/uAeUhUKDfOr3usQF5fAKUEOnIzeyN1zwtsK2grIFagVmCmsetx8a2ArMFagVkCq2PUcka2grIFawVmFWx6jfGtgKyWsLIFVseo5I1kQsSFkhCeMqRZd7AeJtRWM7KCyKI33Dn3u7hDRq4Sufh/F+eicGzBpa++4kaSWOtpGfODwFW7i5Uxy0sLoiNx2KNth4Ja0AtPCCLKPZUKiMUrIiQZHzNcwaw1oO6dsz241lxVcjp+gRkva2hSNmcX2VZ0NXJTytmiduZI3BzTq2HfBFwRvFXlgfCDaqCOdmZsjQbabO0OadhBHEqIIVmZKqsuhmhJ/lSte3gEgOblYTxpmIRXYH9Y7v+2XVQ27b6FxMqWChHUMqWizahpa/71lhfjaR5pUGIVwZTaYPoCdcUsTxxncH01UJCZRP6UI7Mn3vXULrsU0ySyWq5W6nUxPG17LekVbCqXJT8ef+Fk9ZGraWfXfGOoKef30REUaSiIiEIiIhCKnsr7b1jPwzPSkVwqpMrLL1jPw7PSeo642i2hb3k4bVt/6Sq8BVoZFe9qttN0SqtJI1ZeRTRVeVTdEiipHXlG3uK9Vjxvh0n9v1NUmyk/Jk/wCj6xqpBpV3ZSvkyf8AR9axUe0qyd1pNniVneTjb0bvnP0tWwFZgrUCswV0x61XsWwFe7BWDJ6p/Y4Iy92Ym2ZrRvucczQt2LGA3104iZmY3upZLXDW3znhJ0Aa+Iq68EYKhpIhFCzctGk+E52tzjrP/dCsY8rBxKuZTewMr9GjtPgP2vEsEZOImAGqkdI7WyMlkY4N13ztvcqT0+LVDH3tLBm1uYJHcrrlefD+NNNRDcyPLpbX7CyzpLaidTRtPKoZV5TKhx+BghY37e6kdbiLQP3Xd3OWEI6yqHTy212GwfsrAkwFSOFnUtMf0GdS42EcRKOUExh8DtRY4lt+Frri2yyiUWUasBzsp3jWNw9p4iH5uRSXAuP9PMQydpp3Hwid1FxusC3jFuFdgSsytJ2Lh1NVRC+XYbqH4exVqaO73ASQj55gNgPtt0t/ccK4avvM4anNcNoIPSFW2O2KggvVUzfgifhYx82T4TfscGrZoupqzpENfn6iiKo6eR2dReiwjPT37DJJFutIa4gHaNBXnqqiSVxdK98jzpc5xc7lKxQhaIAve2VOtlutRCnuSfvqjyYemRQUhTvJR39R5MPTIp634DtneEqb3CpJlA+Tp9kXrWKlyFdGP/ydPsh9axUyQk4d8I6/ALin91TDJV8df+Fk9ZGrYVUZKh/Gv/CyenGrXUdd8Y6gkz++iIijSUREQhEREIRVVlSZesb9xH6UitVVllLZeqb9wz0nrPxM2g2hbWAm1XsKr6WNWHkZbYVW2m6JVB5Y1PskLbe6dtP/AJVn4e+8zRr7ivT4y++Hy/2/W1dzKT8mTbYvWMVGNKvPKV8mTbYvWMVFNKsq3WkGrxKV5Li9G75z9LVtBWYzm2+bLUCu/iNRifCEDLXDX7t29aMF+fguwDjXyN18i2KkiJjpHZgCdwurbxLwI2ipWsI+FfaSY692R3uxujlOteDH3Gj3FH2KIj3TK0lp07hmjdEb5zgbCdVjL776/P2MWFDV1Us9yWue7c8EYNmjkA47rSc4NAC8LhlMa2pdLNlAyntJzDVn3WXke8uJc4klxJc4kucSdJJOcnhQFagVmCu2PXpnxraCsgVqBWYKrY9RyRqZYj40upntp5nE08hAaSf5bjoI3mE6Rq0797Tmja9pa4BzXAtc05wQcxBX59CuXEXCBqKJhcbvivC86yWAbknh3JauZ2D3gsDEqcN/Ebt5qtMY8FmkqXw59wCHRE643d7yZxtaVzVYGVSjG5hqBpDnQu4Q4FzeTcu5VXoK06aYvjBOdfYz5yMO6+tZEKdZKe/qPJh6ZFBVO8lXf1Hkw9Mi6rPgO2d4SZ/cKkeP3ydPsi9axU0Qrlx9+T5v0vWsVOEJOHfCOvwC4p/dUvyW/HX/AIWT041aqqvJb8df+Ff6catRR13xtgSJ/fRERRpKIiIQiIiEIq5yiMvUt+4Z6b1Yyr/H1l6gfct6XLNxY2pjrHetXBnWqdhUHljU4yUtt7p20/8AkUSljUyyZNt7o2wf5FkYY69Qzb9JXocVfeikGr6mrqZRR/42XbD6xio18avXKCL4Pl2xesYqVkjWhiDrTDV4ld+TLrUjvnP0tXPBU5ySNBrnE6WwyEbe5H9yoXJGpHk3q+w4RiBIAk3UR2vBDf8AVZLp3+23WtnE29OilAz9E8BdXRhlxbTTEaRBMRtDDZfncFfpKaIPaWnQ5padhFivzphKjdBO+B3fRyPY7NYEhxbfYdPGtOoNiF5jyZILZWdfsnZl7sm9aQVmCtQKzBQx69C9i2gr6CtYKzBVTHqN7FsBVoZKCewTDV2Zp4ywX6AqtBVwZNKExUIe4WM8j5R5GZjeUNvxp733asTFgGwayF9ylge4b708ZG2xHQSqnBVl5VaoNp4or53zF/5WNIP7vaqyBVNK6zdqkomfgA9p5eC2gqfZK+/qPJh6XqvgVP8AJSe6n8mHpkVFS68Dhq7wl1bbRn76wpLj58nzbIvWsVPEK4ce/k+bZF61ip8hfcO+Efm8Apqf3VLMl/xx/wCGf6catRVdkw+OP/DP9ZErRUVf8Y7Eif30REUaSiIiEIiIhCKDY7MvUD7pvS5TlQ7HBl5h92OlyycbNqQntHetDDDae/YVD5Y1LMnDbe6P0P8AIo7LGpPiA2xn/R/yLDwh96pg1/SVt4i+9I8avqC92Prb0Eu2L1jVT0sauXHYXoZNsfrGqpZY1o4q604+Ud5TfJ99qY/Me5q5Esa1QSOika9ps5ha4HecDcHlC6Msa8csamY9emY+4sVfuAsJMq6dk7Ld20bof0v8JvEVBcqGK5f/AB0IN2ttUAC5sAbScQsDsB31wsQcZ/cMhhmv7mlcN1r7G7QHgb2gHgA3rG44pGvaHNIc1wBBBBaWnQQdYXoI3tqI8ufx0rws8cuEVvTZlab20FvW09o5HrX5tBX0FWrjRk4jmJloy2J5u4wuuIieAjO3ZYjYoJV4oYQhO5dSyn7TGGZu27LpHQezONq9VBiVJVNux4B0EgHjn2LkArIFdGPFqucbCkqCeGB9uUtACk+A8m88hDqtwhZrYCHSkb2a7Rt/ZURuJzJdTVU8Iu9433O4XK4mKmAJK+cMFxE0h0z9TWbwP9R0Dl1K8IIWsaGMAa1jQ1rRoDQLADiXmwXgyGljEULA1gz75J1ucdZ4VFsf8ahTsNLAb1DxZ7gf5TCP2eRo3tO9eleRqJpMQnDIxkGbxJ+8iiGPmGBVVZ3BvHAOxRnUSCd04bXZtgCjoK1BZAquN1hZbogEbAwZgtoKsDJP31R5MPTIq9BVgZJu+qPJh6XpsrrxEfecLNr2WhcdXeFKMe/k+b9L1rFUCt7H35Om/S9axU+CnUDrRnX4BQUrbxk9vJTDJiP4x/4Z/pxq0VV2TH42/wDDP9ONWipa8/jHUFLUe+iIijSUREQhEREIRRXGhl5fyDpKlSjeMbPhAd9vWsbHv/Edbe9V0JtMNRUXljXexKdZ8rdbgw+aSP8AcubJGt+ApuxVDXHMHXY7Y7R+9l5nC5wyqjJzXtvyeK2Kj24HNGjuN/BSPGeDslJKBqaH8THBx/YFVTLGrpkjDgWkXBBBHAdKqzDWDjTyujOgHuTvsPenk/e638aiILZdh7x4rnBKgAOjOm/gfBR2WNeSWNdeWNeOWNZLHr1Eci5EsakGK2Oc9B8G4dlpySTGTYtvpLHeDv20ct1ypY15JY1dDMWG7TlT5IoqiMxyjpNP3sKvDA+NlFVgdjma15+aeQyS+8BocfJJXfX5mc0jQSNi9lJhyrhaGxVE0YGhjZntHIDZa0deSPaCwJ/JZpN4ZLDQRfiOS/Rq8OEMJwU4vPLHGNW6cAT5I0k7FQ78Zq4izqupI3uyyW9Jc8yOcSS51zpcXXvtJTvSwcwSmeSzgfxJNw52A15VZGMuUfdAxUIcL5jO4Wd+RurVndya1XrnkklxJcSSXE3JJzkknSeFaAVmCu2yEla8FBDTN6MYtpPWdZ8M2gBbQVkCtQKzBVLHrh8a2Aqysk8BDJ5dT5I4xtaC4+m1VpG0kgAEkkBoAuSSbAAazdXlipgv3JSxwm27tu5T/wCx2d2fXbRsAT3vu2ywsWcGRdHrceAyleHKLMG0Eg1vdEweeHdDSqjBU9yqYSF4qYHvfh5BvXu1n+/9lAAVVSnotU9FERACesk+Hgprkv8Ajb/w0npxK0VV+S1l6mR2ptORxuey3olWgp6s3k2BZ1YLSkdgRERTKVEREIRERCEXGxghuGv/AKbg8ecdC7K0VUIkYWHX/wBCjxCn9IpnxDORk1jKOITIn9B4coc9q80ka6EsZBIIsQc44V53tX5sDbIVuMfoUlwJX9mjs4/CMsHcO8eNa8PYHbUszWbI2+4dq2O4OhR2CZ0TxIw2cOQjXxKV4OwiyYZszx3zCc42b44V7jDq+Oti8xN71sv9Q0jt/wCjIs6eJ0D/ADseQd37cLZFWVfQvicWSNLXDUekHWOFc6WNXHW0MUzdzKxrxqvpGw6RxKO1mJMTs8cj2cDmh44tBU82DysN4j0h25DyOvItemxmMi0vsneOY1ZVWcsa8ksasd+IDj8+3mz7S0vycuP0hnNn2lwygqh+Ti3mtRmM0YzycHclWUsa8skatJ+TRx+kt8w9a0uyWuP0pvNu9pUtpKgfl4jmqmY7Qj+J/q/9Kq4FZgqyjkncfpY5s+0vnvTu+tN5o9ae2nmH5eI5phx7DyPif6u/Sq4BWQKsX3p3fXBzZ9pPepk+tt5s+0qGxyDO3u5pD8aw8/xP9X/pVeArbG0kgAE3IDQBcknQABpKsmjyWRg3lqnOb/SyIMPnFx6FLMC4s0lGLwxDd2zyu7uXid4I4BYKpjXdeRZ9TjdK0fh3edVhtvl4KN4iYnGAiqqm2lteKI59zfw3/a3hq26JlhTCEdLC+eU2ZGLnfJ0Bo3yTYDamE8JQ0zDLPI1jBfOdJO80aXHgCp/G3GiSvfYAsp4yexx3z30bp1tLujlJdrWHFDNiMxkf7vWeodg++05c/NwphB9VM+Z/fyO3Vr3AGhrRwAADiXmBWoFeijgfK9sbBunvcGNbvuOYKtj1vOiDRYZAOAH7Ky8llFuYZZyP5sjWN8mMaeVxHEp0vBgagbTU8cDc4iYGk6Lu0udxkk8a96me7pOJXkZ5POSOfp7urgiIi5SkREQhEREIRERCFycLUW6+EaM474b4XCc1TNcnCGC913Udr626j1Ly+M4K6RxngGX8zdPaO3SOvOMue2nqOj7Lsyjj2rSQWndNJBGcEGxHGvdLGQbEEEaRoK872ryTT0T2jgtNrl7aTGORmaVokH9Q7l3UV0o8ZaY6XPZtYT6N1GZI145Y1u0+OVUYsSHfML8QQTtJK+Gigk6rasnNTTtko/HjzX+ysTjPRD58eY/2VApY15JY1e3HZjna3ceaY3CKc9bt45KxjjXQD6Q3zH+ysTjfQD6Q3zJPZVYSxrySxp7cYlP5Rx5qluBUx/M7eP0q2Djlg8fSW83J7KwOO+DR9Kb5knsqnpY15JY09uKPPUOKpZ5OUjvzO3t/Srr7ecGfWm+ZJ7K+dvWDPrTfMk9lUXJGtQKcK956gnDyWo/5372/pV5zZQcGtGadzjvNikH7uaAo/hXKk2xFLASdT5SM35GHP5yq8FZApoqXOXbPJ2jjNyC7WeQC6WFMLT1b93PK+R2ewJs0A6g0ZgNi8gK1Ar0UlO+V4ZEx73uzNAaXOPEOlOY9WOja1tgLAbAOQXwK08neK5hb7rnaRK9tomEZ2xm13OGpx3tQ2kDHFDERsG5nrA18os5sOZzGnUXHwnDkHDmIn6qBNl5LFMRa8GGE3HWdPYOzSevMMmciIhYSIiIQiIiEIiIhCIiIQiIiELRPTskFntv/AN31zp8BtPeO3PBa/wC67CKOooKaoyysBOnMd4ypjJXs902UbdgGTU5h5R/ZaX4tynwmcp6lKkUXqGi/lP8AkU8Vso0blD34qzHw4uV3srQ/E+c+HFyu9lTdEwYLSDqO8poxOcZrblAX4kTn5yDzneytD8Q6g/OU/nP9lWKi7GE0wzA7ymjGakZrblWb8nlUfnKfzn+wtL8m1UfnKbz3+wrSRdjDYB1HeU0Y9VjNbd+6qZ+TGrOiWl8+T/jWl2SurPztL58n/GrfRdihiGnemDyjrRmLdyqD3q6zx1L58nsLNmSuqv3U9OBvhz78m4VuIuhSRjTvQ7yjriM4/wAQq9wbkvgZnnmklO81rYxsJNzyAKY4NwRT0rdzTwxx3Gcgd07ynHO7jK6KJ7Y2tzBZlTXVNT8V5I0ZhuGTgiIi7UiIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQiIiEIiIhC//Z",
        name: "İNSTAGRAM",
      },
      lastMessage: "eray_asma61",
    },
    {
      id: 8,
      user: {
        avatar: 
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
        name: "YOUTUBE",
      },
      lastMessage: "dizzy_61",
    },
    {
      id: 9,
      user: {
        avatar: 
          "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=w240-h480-rw",
        name: "DİSCORD",
      },
      lastMessage: "iameray#4900",
    },
    {
      id: 10,
      user: {
        avatar: 
          "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
        name: "LİNKEDİN",
      },
      lastMessage: "Eray Asma",
    },
    {
      id: 11,
      user: {
        avatar: 
          "data:image/png;base64,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",
        name: "GİTHUP",
      },
      lastMessage: "iameray",
    },
    {
      id: 12,
      user: {
        avatar: 
          "https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c",
        name: "TWITTER",
      },
      lastMessage: "d1zzy.pm",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">
          61 requests
        </button>
      </header>
      {chats.map((chat) => (
        <NavLink
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat?.unread,
            "!bg-[#efefef]": +conversationId === chat.id,
          })}
          key={chat.id}
          to={`/inbox/${chat.id}`}
        >
          <img
            src={chat.user.avatar}
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}