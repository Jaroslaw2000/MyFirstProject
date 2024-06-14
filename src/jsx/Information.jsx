import React from 'react';

const Information = () => {
    return (
        <div className="info">
            <header className="header">
                <h1>Naucz się więcej o jedzeniu</h1>

            </header>
            <section className={"foodInfo"}>
                <p><strong  >Zdrowe odżywianie</strong> – sposób odżywiania, polegający na przyjmowaniu substancji korzystnych dla zdrowia w celu zapewnienia lub poprawy zdrowia. Istotne jest zmniejszenie ryzyka wystąpienia chorób takich jak otyłość, nowotwory, choroby serca. Zdrowa dieta polega na przyjmowaniu odpowiednich ilości niezbędnych składników odżywczych i wody. Składniki pokarmowe mogą być dostarczane w postaci różnych produktów, dlatego wiele sposobów odżywiania i diet może być uznane za zdrowe.</p>
                <br/>
                <p>A tu masz kilka zasad które  pomogą ci w przyszłości :</p>
                <br/>
                    <ul>
                        <li>1.Spożywać posiłki regularnie (4-5 posiłków co 3-4 godziny).</li>
                        <li>2.Spożywać warzywa i owoce jak najczęściej, około połowy tego, co się je. Należy spożywać je w proporcji ¾ warzyw na ¼ owoców.</li>
                        <li>3.Spożywać produkty zbożowe, szczególnie pełnoziarniste.</li>
                        <li>4.Codziennie wypijać przynajmniej dwie duże szklanki mleka, jogurtu lub kefiru, co częściowo można zastąpić serem.</li>
                        <li>5.Ograniczyć spożycie mięsa (zwłaszcza czerwonego i przetworzonych produktów, mniej niż 0,5 kg/tydzień). Zastąpić mięso rybami, warzywami strączkowymi i jajami.</li>
                        <li>6.Ograniczyć spożycie tłuszczu zwierzęcego, zastąpić go olejami roślinnymi.</li>
                        <li>7.Unikać spożywania cukru i słodyczy, zastąpić je owocami i orzechami.</li>
                        <li>8.Unikać dosalania potraw i produktów o dużej zawartości soli. Zastąpić sól ziołami.</li>
                        <li>9.Wypijać przynajmniej 1,5 l wody dziennie.</li>
                        <li>10.Unikać alkoholu</li>
                    </ul>
            </section>
        </div>
    );
}

export default Information;
