import { Outlet } from "react-router";

const Kontakty = () => {
  return (
    <div>
      <h1>Kontakty</h1>
      <p>
        orem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo,
        imperdiet in, aliquam sit amet, feugiat eu, orci. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Duis ante orci, molestie
        vitae vehicula venenatis, tincidunt ac pede. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Nulla quis diam. Sed ut perspiciatis unde omnis iste
        natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Itaque earum rerum hic tenetur a
        sapiente delectus, ut aut reiciendis voluptatibus maiores alias
        consequatur aut perferendis doloribus asperiores repellat. Integer
        tempor. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
        Pellentesque sapien. Duis risus. Aliquam erat volutpat. Aliquam ornare
        wisi eu metus. Nam quis nulla. Aliquam erat volutpat. Suspendisse
        sagittis ultrices augue. Aliquam in lorem sit amet leo accumsan lacinia.
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Aliquam erat volutpat. Nulla pulvinar eleifend
        sem. Aliquam erat volutpat. Aenean id metus id velit ullamcorper
        pulvinar. Nullam at arcu a est sollicitudin euismod. In convallis.
        Nullam faucibus mi quis velit. Donec ipsum massa, ullamcorper in, auctor
        et, scelerisque sed, est. Fusce tellus. In laoreet, magna id viverra
        tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed
        libero. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at
        dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis
        volutpat ante, in pharetra metus odio a lectus.
      </p>
      <Outlet />
    </div>
  );
};
export default Kontakty;
