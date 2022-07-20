import styles from './Prato.module.scss'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import TagsPrato from 'components/TagsPrato'
import NotFound from 'pages/NotFound'
import PaginaPadrao from 'components/PaginaPadrao'

export default function Prato() {

    const navigate = useNavigate()
    const { id } = useParams()
    const prato = cardapio.find(item => item.id === Number(id))
    if (!prato) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <button className={styles.voltar} onClick={() => navigate(-1)} >
                            {'< Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}> {prato.title} </h1>
                            <div className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}> {prato.description}</p>
                                <TagsPrato {...prato} />
                            </div>
                        </section>
                    </>
                } />
            </Route>
        </Routes>
    )
}

/*Criar uma nova página:

1. Criar subpasta na pasta Pages;
2. Criar arquivo index.tsx e .scss;
3. Fazer importação do arquivo .scss no index;
4. Criar um Route para o arquivo em route.js;
5. Inserir conteúdo na página dentro da function criada no index.tsx

*/