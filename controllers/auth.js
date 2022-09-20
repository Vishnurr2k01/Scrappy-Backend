const login = (req, res) => {
    const { phone, password } = req.body;
    res.send({ phone, password });
}