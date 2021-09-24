
Surfaces.prototype.ellipticparabaloid = (count = 20, p = 5, q = 5, color = null) => {
    let points = [];
    let edges = [];//21,25,29,30,32,33,34,37
    let polygons = [];

    let da = 2 * Math.PI / count;
    

    //points
    for (let alpha = 0; alpha <= 2* Math.PI; alpha += da) {
        for (let beta = 0; beta <= 2 *  Math.PI+0.000000001; beta += da ) {
            x = alpha * Math.sqrt(p)  * Math.cos(beta);
            y = alpha * Math.sqrt(q) * Math.sin(beta);
            z = 0.5 * alpha * alpha;
            points.push(new Point(x, y, z));;
        } 
    } 
    
    //edges

    for (let i = 0; i < points.length-1; i++) {
        if (points[i + count+1]) {
            edges.push(new Edge(i, i + count+1));
        }
    }

    for (let i = 0; i < points.length; i += count+1) {
        for (let j = 0; j < count; j++) {
            edges.push(new Edge(i + j, i + j + 1))
        }
    }

    //polygons
    color1 = '#' + Math.random().toString(16).slice(3, 9);


    for(let i = 0; i < points.length-count-2;i++){
        if(color == null){
            color1 = '#' + Math.random().toString(16).slice(3, 9);
        }
        polygons.push(new Polygon([i,i+1,count + i + 2,count + i + 1], color1));
    }

    return new Subject(
        points, edges, polygons
    );

}