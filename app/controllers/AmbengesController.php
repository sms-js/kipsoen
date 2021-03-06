<?php

class AmbengesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /ambenges
	 *
	 * @return Response
	 */
	public function index()
	{
		echo "hello world";
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /ambenges/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /ambenges
	 *
	 * @return Response
	 */
	public function store()
	{
		$data = Input::get('registration_number');

        $student = Student::findorFail($data);

        return $student;


	}

	/**
	 * Display the specified resource.
	 * GET /ambenges/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        $columns = Input::get('registration_number');
        $student = Student::findorfail($columns);

        return $student;
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /ambenges/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /ambenges/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /ambenges/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}